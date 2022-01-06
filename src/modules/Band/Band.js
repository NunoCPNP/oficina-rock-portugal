import Image from 'next/image'
import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'

import { Container, ImageContainer, InfoContainer, TextContainer } from './Band.styles'

const Band = ({ band }) => {
  const { t } = useTranslation('bands')

  const lcBand = band.toLowerCase().replace(' ', '-')

  return (
    <Container>
      <div>
        <Image src={`/bands/${band}.webp`} width="500" height="261" alt="" />
      </div>
      <InfoContainer>
        <ImageContainer>
          <Image src={`/bands/${band}-logo.webp`} width="155" height="100" alt="" />
        </ImageContainer>
        <TextContainer>
          <div>{t(`${lcBand}.one`).toLowerCase()}</div>
          <div>{t(`${lcBand}.two`)}</div>
          <div>{t(`${lcBand}.three`)}</div>
        </TextContainer>
      </InfoContainer>
    </Container>
  )
}

Band.propTypes = {
  band: PropTypes.string.isRequired,
}

export default Band
