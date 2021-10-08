import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { AiOutlineCheck } from 'react-icons/ai'
import useTranslation from 'next-translate/useTranslation'

import SectionTitle from '@/components/SectionTitle'
import CustomButton from '@/components/CustomButton'
import Modal from '@/components/Modal'
import MBWay from '@/components/MBWay'

import { Test, Container, Form, ButtonContainer } from './Payment.styles'

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
