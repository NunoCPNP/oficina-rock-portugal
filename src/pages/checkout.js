import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

const CheckOut = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <SectionTitle title={t(`checkout`)} offset="4rem" />
    </>
  )
}

export default CheckOut
