import { Container } from './CheckOutWarnings.styles'

const CheckOutWarnings = ({ user }) => {
  return (
    <Container>
      <div>Fix this before continue to checkout</div>
      {user.phoneNumber === '' && <div>No phone</div>}
      {user.deliveryAddress.street === '' && <div>No street</div>}
      {user.deliveryAddress.postalCode === '' && <div>No postal code</div>}
      {user.deliveryAddress.city === '' && <div>No city</div>}
      {user.deliveryAddress.country === '' && <div>No country</div>}
      {user.deliverySameAsBilling === '' && <div>No billing address</div>}
    </Container>
  )
}

export default CheckOutWarnings
