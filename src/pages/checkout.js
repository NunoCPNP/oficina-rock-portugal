import { useEffect, useState } from 'react'

import CheckOutItems from '@/components/CheckOutItems'
import NoUser from '@/components/NoUser'
import CheckOutWarnings from '@/components/CheckOutWarnings'
import CheckOutWrapper from '@/components/CheckOutWrapper'
import CheckOutConfirmation from '@/components/CheckOutConfirmation'

import useAuth from '@/hooks/useAuth'

const CheckOut = () => {
  const [confirmation, setConfirmation] = useState(false)

  const { user } = useAuth()

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.')
    }
  }, [])

  if (!user)
    return (
      <CheckOutWrapper>
        <NoUser context="checkout" />
      </CheckOutWrapper>
    )

  if (
    user.phoneNumber === '' ||
    user.deliveryAddress.street === '' ||
    user.deliveryAddress.postalCode === '' ||
    user.deliveryAddress.city === '' ||
    user.deliveryAddress.country === '' ||
    user.deliverySameAsBilling === ''
  ) {
    return (
      <CheckOutWrapper>
        <CheckOutWarnings user={user} />
      </CheckOutWrapper>
    )
  }

  return (
    <CheckOutWrapper>
      <CheckOutItems />
      <CheckOutConfirmation confirmation={confirmation} setConfirmation={setConfirmation} />
    </CheckOutWrapper>
  )
}

export default CheckOut
