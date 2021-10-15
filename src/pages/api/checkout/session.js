import { buildStripePayload } from '@/utils/buildStripePayload'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const line_items = buildStripePayload(req.body)

  if (req.method === 'POST') {
    try {
      const checkoutSession = await stripe.checkout.sessions.create({
        line_items,
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${req.headers.origin}/order?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/checkout?canceled=true`,
      })

      res.status(200).json(checkoutSession)
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
