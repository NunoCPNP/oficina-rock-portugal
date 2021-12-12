import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

const Wrapper = styled.div`
  margin: 3rem 0;
`

const WhoWeAre = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <Wrapper>
        <SectionTitle title={t(`who-we-are`)} />
      </Wrapper>
    </>
  )
}

export default WhoWeAre
