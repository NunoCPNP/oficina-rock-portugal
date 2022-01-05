import useTranslation from 'next-translate/useTranslation'

import { Container } from './FreeShipping.styles'

const FreeShipping = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <span>{t(`free-shipping`)}</span>
    </Container>
  )
}

export default FreeShipping
