import { Container } from './TopBanner.styles'
import Trans from 'next-translate/Trans'

import { useSettingsState } from '@/hooks/useSettings'

const TopBanner = () => {
  const { topBanner } = useSettingsState()

  if (!topBanner) {
    return null
  }

  return (
    <Container>
      <Trans
        i18nKey="common:free-shipping-banner"
        components={{
          a: <h4 />,
          b: <span />,
        }}
      />
    </Container>
  )
}

export default TopBanner
