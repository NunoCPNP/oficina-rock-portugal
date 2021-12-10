import FreeShipping from '../FreeShipping'

import useAuth from '@/hooks/useAuth'
import { useProductState } from '@/hooks/useProduct'

import { total } from '@/utils/total'

import { Container, Price } from './CheckOutTotal.styles'

const CheckOutTotal = () => {
  const { shoppingBag } = useProductState()
  const { user } = useAuth()

  const calculatedTotal = total(shoppingBag)

  return (
    <>
      {user.deliveryAddress.country === 'Portugal' && <FreeShipping />}
      <Container>
        <span>Total : </span>
        <Price>
          <span>{calculatedTotal}</span>
          <span>€</span>
        </Price>
      </Container>
    </>
  )
}

export default CheckOutTotal
