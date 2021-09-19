import Link from 'next/link'
import Trans from 'next-translate/Trans'

import { Container } from './NoUser.styles'

const NoUser = ({ context }) => {
  return (
    <Container>
      {context === 'checkout' && (
        <Trans
          i18nKey="common:no-user-checkout"
          components={{
            a: <div />,
            b: <Link href="/login" />,
            c: <Link href="/login" />,
          }}
        />
      )}
      {context === 'account' && (
        <Trans
          i18nKey="common:no-user-account"
          components={{
            a: <div />,
            b: <Link href="/login" />,
            c: <Link href="/login" />,
          }}
        />
      )}
    </Container>
  )
}

export default NoUser
