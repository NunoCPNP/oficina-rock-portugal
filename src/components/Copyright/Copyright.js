import useTranslation from 'next-translate/useTranslation'

import { Container } from './Copyright.styles'

const Copyright = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <div>{t(`copyright`)}</div>
    </Container>
  )
}

export default Copyright
