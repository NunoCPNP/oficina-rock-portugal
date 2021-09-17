import CheckOutItems from '@/components/CheckOutItems'
import Payment from '@/components/Payment'
import NoUser from '@/components/NoUser'
import CheckOutWarnings from '@/components/CheckOutWarnings'
import CheckOutWrapper from '@/components/CheckOutWrapper'

import { useProductState } from '@/hooks/useProduct'
import useAuth from '@/hooks/useAuth'

const CheckOut = () => {
  const { shoppingBag } = useProductState()
  const { user } = useAuth()

  const total = shoppingBag.reduce((accumulator, item, index, array) => {
    return accumulator + item.price
  }, 0)

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
      {shoppingBag.length > 0 && <Payment total={total} />}
    </CheckOutWrapper>
  )
}

export default CheckOut
