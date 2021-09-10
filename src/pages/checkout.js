import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'
import CheckOutItems from '@/components/CheckOutItems'

import Payment from '@/components/Payment'

import useProduct from '@/hooks/useProduct'
import useAuth from '@/hooks/useAuth'

const CheckOut = () => {
  const { t } = useTranslation('common')
  const [{ shoppingBag }, dispatch] = useProduct()
  const { user } = useAuth()

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <SectionTitle title={t(`checkout`)} offset="4rem" />
      <CheckOutItems />
      <Payment />
    </>
  )
}

export default CheckOut
