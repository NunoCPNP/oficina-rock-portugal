import { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import useTranslation from 'next-translate/useTranslation'

import SectionTitle from '../SectionTitle'
import CustomButton from '../CustomButton'

import { Container, Form } from './Payment.styles'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const Payment = ({ total }) => {
  const { t } = useTranslation('common')

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
    <Container>
      <SectionTitle title={t(`payment-options`)} />
      <div>
        <Form action="/api/checkout" method="POST">
          <div>
            <input name="price" type="number" value={total} readOnly />
            <CustomButton type="submit" role="link">
              {t(`cc-pay`)}
            </CustomButton>
          </div>
        </Form>
        <CustomButton inverted>Pay with MBWay</CustomButton>
      </div>
    </Container>
  )
}

export default Payment
