import { AiOutlineCreditCard } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'

import { useProductState } from '@/hooks/useProduct'

import { getStripe } from '@/utils/getStripe'

import { ButtonContainer, ButtonLabel, Container, StyledCustomButton } from './Payment.styles'

const Payment = ({ setMbWay }) => {
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
        <ButtonContainer>
          <form onSubmit={handleCheckout}>
            <StyledCustomButton type="submit">
              <ButtonLabel>
                <AiOutlineCreditCard />
                {t(`cc-pay`)}
              </ButtonLabel>
            </StyledCustomButton>
          </form>
          <CustomButton inverted onClick={() => setMbWay()}>
            <ButtonLabel>
              <BsPhone />
              {t(`mbway-pay`)}
            </ButtonLabel>
          </CustomButton>
        </ButtonContainer>
      </Container>
    </>
  )
}

export default Payment
