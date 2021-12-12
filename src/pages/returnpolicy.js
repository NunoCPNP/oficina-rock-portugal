import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

const Wrapper = styled.div`
  margin: 3rem 0;
`

const ReturnPolicy = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <Wrapper>
        <SectionTitle title={t(`return-and-refund`)} />
      </Wrapper>
    </>
  )
}

export default ReturnPolicy
