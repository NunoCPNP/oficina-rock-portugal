import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import { StyledSection, GridContainer, ItemContainer, TextContainer } from './CTA.styles'

const CTA = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <StyledSection>
      <GridContainer>
        <ItemContainer
          style={{
            backgroundImage: "url('men.webp')",
          }}
          onClick={() => router.push('/men')}
        >
          <TextContainer>
            <h2>{t(`common:men`)}</h2>
          </TextContainer>
        </ItemContainer>
        <ItemContainer style={{ backgroundImage: "url('women.webp')" }} onClick={() => router.push('/women')}>
          <TextContainer>
            <h2>{t(`common:women`)}</h2>
          </TextContainer>
        </ItemContainer>
        <ItemContainer
          style={{
            backgroundImage: "url('acessories.webp')",
          }}
          onClick={() => router.push('/acessories')}
        >
          <TextContainer>
            <h2>{t(`common:acessories`)}</h2>
          </TextContainer>
        </ItemContainer>
      </GridContainer>
    </StyledSection>
  )
}

export default CTA
