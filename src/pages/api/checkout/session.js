const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const a = JSON.parse(req.body)

  const line_items = []

  a.forEach((element) => {
    const item = {
      price_data: {
        currency: 'EUR',
        unit_amount: element.price * 100,
        product_data: {
          name: `${element.band} ${element.title}`,
          description: `${element.type} size ${element.size}`,
        },
      },
      quantity: element.quantitySelected,
    }

    line_items.push(item)
  })

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
