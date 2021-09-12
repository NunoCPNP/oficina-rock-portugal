import { useState, useEffect } from 'react'

import useAuth from '@/hooks/useAuth'

import { Container } from './CheckOutWarnings.styles'

const CheckOutWarnings = ({ setWarning }) => {
  const { user } = useAuth()

  const [mounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => {
      setIsMounted(false)
    }
  }, [])

  if (!user) {
    mounted && setWarning(true)

    return (
      <Container>
        <div>Please Login or Create a New Account to be able to proceed to checkout</div>
      </Container>
    )
  }

  if (
    !user.phoneNumber === '' ||
    user.deliveryAddress.street === '' ||
    user.deliveryAddress.postalCode === '' ||
    user.deliveryAddress.city === '' ||
    user.deliveryAddress.country === '' ||
    user.deliverySameAsBilling === ''
  ) {
    mounted && setWarning(true)

    return (
      <>
        <div>Fix this before continue to checkout</div>
        {user.phoneNumber === '' && <div>No phone</div>}
        {user.deliveryAddress.street === '' && <div>No street</div>}
        {user.deliveryAddress.postalCode === '' && <div>No postal code</div>}
        {user.deliveryAddress.city === '' && <div>No city</div>}
        {user.deliveryAddress.country === '' && <div>No country</div>}
        {user.deliverySameAsBilling === '' && <div>No billing address</div>}
      </>
    )
  }

  return mounted && setWarning(false)
}

export default CheckOutWarnings
