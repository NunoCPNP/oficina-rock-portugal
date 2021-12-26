import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'

import Return from '@/components/Return'
import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

const Wrapper = styled.div`
  margin: 3rem 0;
`

const StyledSectionTitle = styled(SectionTitle)`
  text-align: center;
`

const ReturnPolicy = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO title="Oficina Rock Portugal" />
      <Wrapper>
        <StyledSectionTitle title={t(`shipping-and-exchanges`)} />
        <Return />
      </Wrapper>
    </>
  )
}

export default ReturnPolicy
