import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'
import CheckOutItems from '@/components/CheckOutItems'
import Payment from '@/components/Payment'
import CheckOutWarnings from '@/components/CheckOutWarnings'

import { useProductState } from '@/hooks/useProduct'

const CheckOut = () => {
  const { t } = useTranslation('common')
  const { shoppingBag } = useProductState()

  const [warning, setWarning] = useState(true)

  const total = shoppingBag.reduce((accumulator, item, index, array) => {
    return accumulator + item.price
  }, 0)

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <SectionTitle title={t(`checkout`)} offset="4rem" />
      <CheckOutWarnings setWarning={setWarning} />
      {!warning && (
        <>
          <CheckOutItems />
          <Payment total={total} />
        </>
      )}
    </>
  )
}

export default CheckOut
