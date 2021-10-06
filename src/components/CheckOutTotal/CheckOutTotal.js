import { total } from '@/utils/total'

import { useProductState } from '@/hooks/useProduct'

import { Container } from './CheckOutTotal.styles'

const CheckOutTotal = () => {
  const { shoppingBag } = useProductState()

  const calculatedTotal = total(shoppingBag)

  return (
    <Container>
      <div>
        <span>Total :</span>
        <span>${calculatedTotal}</span>
        <span>€</span>
      </div>
    </Container>
  )
}

export default CheckOutTotal
