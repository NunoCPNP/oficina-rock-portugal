import Image from 'next/image'

import { Container, ImageContainer, DetailsContainer } from './CartItem.styles'

const CartItem = ({ item = {} }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.image} alt="" width="50" height="50" />
      </ImageContainer>
      <DetailsContainer>
        <div>
          <span>{item.type}</span>
          <div>{item.band}</div>
        </div>
      </DetailsContainer>
      <div>{item.quantitySelected}</div>
      <div>{item.size}</div>
      <div>{item.price * item.quantitySelected} €</div>
    </Container>
  )
}

export default CartItem
