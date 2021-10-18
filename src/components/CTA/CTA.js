import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import { GridContainer, ItemContainer, StyledSection, TextContainer } from './CTA.styles'

const CTA = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <StyledSection>
      <GridContainer>
        <ItemContainer imageUrl="men.webp" onClick={() => router.push('/men')}>
          <TextContainer>
            <h2>{t(`men`)}</h2>
          </TextContainer>
        </ItemContainer>
        <ItemContainer imageUrl="women.webp" onClick={() => router.push('/women')}>
          <TextContainer>
            <h2>{t(`women`)}</h2>
          </TextContainer>
        </ItemContainer>
        <ItemContainer imageUrl="accessories.webp" onClick={() => router.push('/accessories')}>
          <TextContainer>
            <h2>{t(`accessories`)}</h2>
          </TextContainer>
        </ItemContainer>
      </GridContainer>
    </StyledSection>
  )
}

export default CTA
