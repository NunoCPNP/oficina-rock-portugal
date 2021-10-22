import { useEffect } from 'react'

import AccountDetails from '@/components/AccountDetails'
import CheckOutConfirmation from '@/components/CheckOutConfirmation'
import CheckOutItems from '@/components/CheckOutItems'
import CheckOutWarnings from '@/components/CheckOutWarnings'
import CheckOutWrapper from '@/components/CheckOutWrapper'
import NoUser from '@/components/NoUser'

import useAuth from '@/hooks/useAuth'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useProductDispatch } from '@/hooks/useProduct'

const CheckOut = () => {
  const { user } = useAuth()
  const dispatch = useProductDispatch()
  const [lStorage, setLStorage] = useLocalStorage('bag')

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)

    if (query.get('canceled')) {
      dispatch({ type: 'RESTORE_FROM_STORAGE', payload: lStorage })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <AccountDetails />
      <CheckOutConfirmation />
    </CheckOutWrapper>
  )
}

export default CheckOut
