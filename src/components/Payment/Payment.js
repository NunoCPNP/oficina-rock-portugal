import { loadStripe } from '@stripe/stripe-js'
import useTranslation from 'next-translate/useTranslation'

import SectionTitle from '../SectionTitle'
import CustomButton from '../CustomButton'

import { Container, Form, ButtonContainer } from './Payment.styles'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const Payment = ({ total }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <SectionTitle title={t(`payment-options`)} />
      <ButtonContainer>
        <Form action="/api/checkout" method="POST">
          <div>
            <input name="price" type="number" value={total} readOnly />
            <CustomButton type="submit" role="link">
              {t(`cc-pay`)}
            </CustomButton>
          </div>
        </Form>
        <CustomButton inverted>{t(`mbway-pay`)}</CustomButton>
      </ButtonContainer>
    </Container>
  )
}

export default Payment
