import { useEffect, useState } from 'react'

import CheckOutConfirmation from '@/components/CheckOutConfirmation'
import CheckOutItems from '@/components/CheckOutItems'
import CheckOutWarnings from '@/components/CheckOutWarnings'
import CheckOutWrapper from '@/components/CheckOutWrapper'
import NoUser from '@/components/NoUser'

import useAuth from '@/hooks/useAuth'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useProductState } from '@/hooks/useProduct'

const CheckOut = () => {
  const { shoppingBag } = useProductState()
  const [confirmation, setConfirmation] = useState(false)
  const [name, setName] = useLocalStorage('bag', {})

  useEffect(() => {
    setName(shoppingBag)
  }, [])

  const { user } = useAuth()

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
