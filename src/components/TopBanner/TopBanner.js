import useTranslation from 'next-translate/useTranslation'

import { Container } from './TopBanner.styles'

const TopBanner = () => {
  const { t } = useTranslation()

  return <Container>TOP BANNER</Container>
}

export default TopBanner
