import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '../CustomButton'
import Payment from '../Payment'
import SectionTitle from '../SectionTitle'

import { total } from '@/utils/total'

import { useProductState } from '@/hooks/useProduct'

import { ButtonContainer } from './CheckOutConfirmation.styles'

const CheckOutConfirmation = ({ confirmation, setConfirmation }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { shoppingBag } = useProductState()

  const calculatedTotal = total(shoppingBag)

  if (shoppingBag.length === 0) return null

  if ((confirmation === true) & (shoppingBag.length > 0)) return <Payment total={calculatedTotal} />

  if (confirmation === true) return null

  return (
    <>
      <SectionTitle title={t(`checkout-confirmation`)} />
      <ButtonContainer>
        <CustomButton onClick={() => setConfirmation(true)}>{t(`proceed-to-payment`)}</CustomButton>
        <CustomButton inverted onClick={() => router.push('/')}>
          {t(`back-to-shop`)}
        </CustomButton>
      </ButtonContainer>
    </>
  )
}

export default CheckOutConfirmation
