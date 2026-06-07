// ============================================================
// Vercel Serverless Function: POST/GET /api/checkout
//
// Creates a Stripe Checkout Session for the NILA allocation
// deposit with the requested quantity baked in, then 303s the
// browser to Stripe's hosted checkout.
//
// Env vars (set in Vercel → Settings → Environment Variables):
//   STRIPE_SECRET_KEY   — Test or Live mode secret key
//   STRIPE_PRICE_ID     — Price ID for the SGD 198 deposit
// ============================================================

import Stripe from 'stripe'

const MIN_QTY = 1
const MAX_QTY = 5

export default async function handler(req, res) {
  try {
    // Quantity from ?qty=N (clamped to allowed range)
    const raw = parseInt(req.query?.qty, 10)
    const qty = Number.isFinite(raw)
      ? Math.min(MAX_QTY, Math.max(MIN_QTY, raw))
      : MIN_QTY

    const secret  = process.env.STRIPE_SECRET_KEY
    const priceId = process.env.STRIPE_PRICE_ID

    if (!secret || !priceId) {
      console.error('Missing STRIPE_SECRET_KEY or STRIPE_PRICE_ID')
      res.status(500).send('Checkout temporarily unavailable. Please try again shortly.')
      return
    }

    const stripe = new Stripe(secret, { apiVersion: '2024-12-18.acacia' })

    // Construct return URLs from the request's host so this works
    // identically on preview deploys and the nila.wine production deploy.
    const proto = (req.headers['x-forwarded-proto'] || 'https').toString()
    const host  = (req.headers['x-forwarded-host'] || req.headers.host).toString()
    const base  = `${proto}://${host}`

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: qty,
          adjustable_quantity: {
            enabled: true,
            minimum: MIN_QTY,
            maximum: MAX_QTY,
          },
        },
      ],
      // Customer data we want collected during checkout
      phone_number_collection: { enabled: true },
      billing_address_collection: 'required',
      shipping_address_collection: { allowed_countries: ['SG'] },
      allow_promotion_codes: false,
      // Where Stripe sends them after
      success_url: `${base}/founder-cellar/thank-you/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${base}/founder-cellar/`,
      // Custom metadata so we can reconcile in the dashboard
      metadata: {
        source: 'founder-cellar',
        requested_quantity: String(qty),
      },
    })

    // 303 redirects the browser straight to Stripe's hosted checkout
    res.redirect(303, session.url)
  } catch (err) {
    console.error('Checkout session error:', err)
    res.status(500).send(
      "We couldn't open checkout right now. Please refresh the page or write to hello@nila.wine."
    )
  }
}
