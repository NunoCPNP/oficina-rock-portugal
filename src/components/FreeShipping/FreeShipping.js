import useTranslation from 'next-translate/useTranslation'

import { Container } from './FreeShipping.styles'

const FreeShipping = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <div>{t(`free-shipping`)}</div>
    </Container>
  )
}

export default FreeShipping
