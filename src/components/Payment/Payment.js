import { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const Payment = ({ total }) => {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.')
    }
  }, [])

  return (
    <form action="/api/checkout" method="POST">
      <section>
        <input name="price" type="number" value={total} readOnly />
        <button type="submit" role="link">
          Proceed to Payment
        </button>
      </section>
    </form>
  )
}

export default Payment
