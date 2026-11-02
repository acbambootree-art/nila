// ============================================================
// Vercel Serverless Function: POST /api/stripe-webhook
//
// Stripe webhook receiver. On every completed checkout (a sale),
// emails the order details to the notification address so the
// team gets a copy of every sale.
//
// Env vars (set in Vercel → Settings → Environment Variables):
//   STRIPE_SECRET_KEY       — same key used by /api/checkout
//   STRIPE_WEBHOOK_SECRET   — whsec_… from the Stripe webhook
//                             endpoint (Dashboard → Developers →
//                             Webhooks → Add endpoint →
//                             https://nila.wine/api/stripe-webhook,
//                             events: checkout.session.completed,
//                             checkout.session.async_payment_succeeded)
//   RESEND_API_KEY          — re_… from https://resend.com
//   SALE_NOTIFY_EMAIL       — where sale emails go
//                             (defaults to cj@360nightnday.com)
//   SALE_NOTIFY_FROM        — optional From header; defaults to
//                             Resend's onboarding sender, which can
//                             only deliver to the Resend account
//                             owner's own address
// ============================================================

import Stripe from 'stripe'

// Stripe signature verification needs the exact raw request bytes,
// so disable Vercel's automatic body parsing for this route.
export const config = { api: { bodyParser: false } }

const NOTIFY_EMAIL = process.env.SALE_NOTIFY_EMAIL || 'cj@360nightnday.com'
const NOTIFY_FROM  = process.env.SALE_NOTIFY_FROM  || 'NILA Sales <onboarding@resend.dev>'

async function rawBody(req) {
  const chunks = []
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
}

function money(amount, currency) {
  if (typeof amount !== 'number') return '—'
  return `${(currency || 'sgd').toUpperCase()} ${(amount / 100).toFixed(2)}`
}

function formatAddress(addr) {
  if (!addr) return null
  return [addr.line1, addr.line2, addr.postal_code, addr.city, addr.state, addr.country]
    .filter(Boolean)
    .join(', ')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
    return
  }

  const secret        = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  const resendKey     = process.env.RESEND_API_KEY

  if (!secret || !webhookSecret) {
    console.error('Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET')
    res.status(500).send('Webhook not configured')
    return
  }

  const stripe = new Stripe(secret, { apiVersion: '2024-12-18.acacia' })

  let event
  try {
    const body = await rawBody(req)
    event = stripe.webhooks.constructEvent(body, req.headers['stripe-signature'], webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    res.status(400).send('Invalid signature')
    return
  }

  const isSale =
    (event.type === 'checkout.session.completed' &&
      event.data.object.payment_status === 'paid') ||
    event.type === 'checkout.session.async_payment_succeeded'

  if (!isSale) {
    res.status(200).json({ received: true, ignored: event.type })
    return
  }

  const session = event.data.object

  // Final quantity (buyers can adjust it on the Stripe page)
  let quantity = session.metadata?.requested_quantity || '?'
  try {
    const items = await stripe.checkout.sessions.listLineItems(session.id, { limit: 10 })
    quantity = items.data.reduce((sum, li) => sum + (li.quantity || 0), 0) || quantity
  } catch (err) {
    console.error('Could not fetch line items:', err.message)
  }

  const buyer = session.customer_details || {}
  // shipping_details moved under collected_information in newer API versions
  const shipping =
    session.collected_information?.shipping_details || session.shipping_details || null

  const lines = [
    `A new NILA sale just came through.`,
    ``,
    `Amount:    ${money(session.amount_total, session.currency)}`,
    `Bottles:   ${quantity}`,
    `Name:      ${buyer.name || shipping?.name || '—'}`,
    `Email:     ${buyer.email || '—'}`,
    `Phone:     ${buyer.phone || '—'}`,
    `Shipping:  ${formatAddress(shipping?.address) || '—'}`,
    `Billing:   ${formatAddress(buyer.address) || '—'}`,
    ``,
    `Product:   ${session.metadata?.product || '—'}`,
    `Source:    ${session.metadata?.source || '—'}`,
    `Session:   ${session.id}`,
    `Dashboard: https://dashboard.stripe.com/payments/${session.payment_intent || ''}`,
  ]

  if (!resendKey) {
    // Don't make Stripe retry forever if email isn't configured yet —
    // log the sale and acknowledge.
    console.error('RESEND_API_KEY not set; sale email NOT sent:', lines.join(' | '))
    res.status(200).json({ received: true, emailed: false })
    return
  }

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: NOTIFY_FROM,
        to: [NOTIFY_EMAIL],
        subject: `NILA sale — ${quantity} bottle(s) — ${money(session.amount_total, session.currency)}`,
        text: lines.join('\n'),
      }),
    })
    if (!resp.ok) {
      throw new Error(`Resend ${resp.status}: ${await resp.text()}`)
    }
  } catch (err) {
    console.error('Sale email failed:', err.message)
    // 500 → Stripe retries the event, so the email gets another chance
    res.status(500).send('Email failed')
    return
  }

  res.status(200).json({ received: true, emailed: true })
}
