// node scripts/check-checkout.mjs — asserts /api/checkout's query handling.
import assert from 'node:assert/strict'
import { readQuery } from '../api/checkout.js'

// No params: unchanged /founder-cellar behaviour
assert.deepEqual(readQuery({}), { qty: 1, product: null, source: 'founder-cellar', cancelPath: '/founder-cellar/' })
assert.deepEqual(readQuery(undefined), readQuery({}))

// Quantity is clamped to 1..5
assert.equal(readQuery({ qty: '3' }).qty, 3)
assert.equal(readQuery({ qty: '99' }).qty, 5)
assert.equal(readQuery({ qty: '0' }).qty, 1)
assert.equal(readQuery({ qty: 'abc' }).qty, 1)

// From the experience page, with a named bottle
assert.deepEqual(readQuery({ qty: '2', product: 'blanc', from: 'experience' }),
  { qty: 2, product: 'blanc', source: 'experience', cancelPath: '/experience/#collection' })

// Unknown values never reach Stripe metadata or the redirect
assert.equal(readQuery({ product: '<script>' }).product, null)
assert.equal(readQuery({ product: ['gin'] }).product, null)
assert.equal(readQuery({ from: 'https://evil.example' }).cancelPath, '/founder-cellar/')

console.log('checkout query: ok')
