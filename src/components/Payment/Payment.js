import { AiOutlineCheck } from 'react-icons/ai'
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'
import MBWay from '@/components/MBWay'
import Modal from '@/components/Modal'
import SectionTitle from '@/components/SectionTitle'

import { useProductState } from '@/hooks/useProduct'

import { getStripe } from '@/utils/getStripe'

import { ButtonContainer, Confirmation, Container } from './Payment.styles'

const Payment = () => {
  const [paymentModal, setPaymentModal] = useState(false)
  const { shoppingBag } = useProductState()
  const { t } = useTranslation('common')

  const handleCheckout = async (event) => {
    event.preventDefault()

    const session = await fetch('/api/checkout/session', {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(shoppingBag || {}),
    })

    const response = await session.json()

    const stripe = await getStripe()
    await stripe.redirectToCheckout({ sessionId: response.id })

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }
  }

  return (
    <>
      <Container>
        <Confirmation>
          <span>Checkout Information Confirmed</span>
          <AiOutlineCheck />
        </Confirmation>
        <SectionTitle title={t(`payment-options`)} />
        <form onSubmit={handleCheckout}>
          <ButtonContainer>
            <CustomButton type="submit">{t(`cc-pay`)}</CustomButton>
            <CustomButton inverted onClick={() => setPaymentModal(true)}>
              {t(`mbway-pay`)}
            </CustomButton>
          </ButtonContainer>
        </form>
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
