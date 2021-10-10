import { AiOutlineCheck } from 'react-icons/ai'
import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'
import MBWay from '@/components/MBWay'
import Modal from '@/components/Modal'
import SectionTitle from '@/components/SectionTitle'

import { ButtonContainer, Container, Form, Test } from './Payment.styles'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const Payment = ({ total }) => {
  const [paymentModal, setPaymentModal] = useState(false)
  const { t } = useTranslation('common')

  return (
    <>
      <Container>
        <Test>
          <span>Checkout Information Confirmed</span>
          <AiOutlineCheck />
        </Test>
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
          <CustomButton inverted onClick={() => setPaymentModal(true)}>
            {t(`mbway-pay`)}
          </CustomButton>
        </ButtonContainer>
      </Container>
      {paymentModal && (
        <Modal>
          <MBWay />
        </Modal>
      )}
    </>
  )
}

export default Payment
