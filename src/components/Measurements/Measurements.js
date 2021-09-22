import useTranslation from 'next-translate/useTranslation'

import { Container, Title, Measures, Measure } from './Measurements.styles'

const Measurements = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Title>{t(`measure-title`)}</Title>
      <Measures>
        <Measure>
          <span>XS</span>
          {t(`measure-xs`)}
        </Measure>
        <Measure>
          <span>S</span>
          {t(`measure-s`)}
        </Measure>
        <Measure>
          <span>M</span>
          {t(`measure-m`)}
        </Measure>
        <Measure>
          <span>L</span>
          {t(`measure-l`)}
        </Measure>
        <Measure>
          <span>XL</span>
          {t(`measure-xl`)}
        </Measure>
        <Measure>
          <span>XXL</span>
          {t(`measure-xxl`)}
        </Measure>
      </Measures>
    </Container>
  )
}

export default Measurements
