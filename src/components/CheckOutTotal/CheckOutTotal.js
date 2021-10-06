import { total } from '@/utils/total'

import { useProductState } from '@/hooks/useProduct'

import { Container, Price } from './CheckOutTotal.styles'

const CheckOutTotal = () => {
  const { shoppingBag } = useProductState()

  const calculatedTotal = total(shoppingBag)

  return (
    <Container>
      <span>Total : </span>
      <Price>
        <span>{calculatedTotal}</span>
        <span>€</span>
      </Price>
    </Container>
  )
}

export default CheckOutTotal
