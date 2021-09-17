import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import { Container } from './NoUser.styles'

const NoUser = ({ context }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      {context === 'checkout' && (
        <div>
          Please <Link href="/login">Login</Link> or <Link href="/login">Create a New Account</Link> to be able to
          proceed to checkout
        </div>
      )}
      {context === 'account' && (
        <div>
          Please <Link href="/login">Login</Link> or <Link href="/login">Create a New Account</Link> to be able to
          change or complete your account information
        </div>
      )}
    </Container>
  )
}

export default NoUser
