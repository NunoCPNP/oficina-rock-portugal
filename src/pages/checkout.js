import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

import useProduct from '@/hooks/useProduct'

const CheckOut = () => {
  const { t } = useTranslation('common')
  const [state, dispatch] = useProduct()

  console.log('-->', state)

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <SectionTitle title={t(`checkout`)} offset="4rem" />
    </>
  )
}

export default CheckOut
