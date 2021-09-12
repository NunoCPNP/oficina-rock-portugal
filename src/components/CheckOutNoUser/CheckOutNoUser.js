import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import { Container } from './CheckOutNoUser.styles'

const CheckOutNoUser = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <div>
        Please <Link href="/login">Login</Link> or <Link href="/login">Create a New Account</Link> to be able to proceed
        to checkout
      </div>
    </Container>
  )
}

export default CheckOutNoUser
