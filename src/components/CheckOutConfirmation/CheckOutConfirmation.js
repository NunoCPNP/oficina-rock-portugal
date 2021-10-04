import useTranslation from 'next-translate/useTranslation'

import SectionTitle from '../SectionTitle'
import CustomButton from '../CustomButton'
import Payment from '../Payment'

import { useProductState } from '@/hooks/useProduct'

import { ButtonContainer } from './CheckOutConfirmation.styles'

const CheckOutConfirmation = ({ confirmation, setConfirmation }) => {
  const { t } = useTranslation('common')
  const { shoppingBag } = useProductState()

  const total = shoppingBag.reduce((accumulator, item) => {
    return accumulator + item.price
  }, 0)

  if (shoppingBag.length === 0) return null

  if ((confirmation === true) & (shoppingBag.length > 0)) return <Payment total={total} />

  if (confirmation === true) return null

  return (
    <>
      <SectionTitle title={t(`checkout-confirmation`)} />
      <ButtonContainer>
        <CustomButton onClick={() => setConfirmation(true)}>{t(`proceed-to-payment`)}</CustomButton>
        <CustomButton inverted>{t(`back-to-shop`)}</CustomButton>
      </ButtonContainer>
    </>
  )
}

export default CheckOutConfirmation
