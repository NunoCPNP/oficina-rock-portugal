import { AiOutlineCreditCard } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'
import MBWay from '@/components/MBWay'
import Modal from '@/components/Modal'

import { useProductState } from '@/hooks/useProduct'

import { getStripe } from '@/utils/getStripe'

import { ButtonContainer, ButtonLabel, Container } from './Payment.styles'

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
        <h2>{t(`payment-options`)}</h2>
        <p>{t(`payment-method`)}</p>
        <form onSubmit={handleCheckout}>
          <ButtonContainer>
            <CustomButton type="submit">
              <ButtonLabel>
                <AiOutlineCreditCard />
                {t(`cc-pay`)}
              </ButtonLabel>
            </CustomButton>
            <CustomButton inverted onClick={() => setPaymentModal(true)}>
              <ButtonLabel>
                <BsPhone />
                {t(`mbway-pay`)}
              </ButtonLabel>
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
