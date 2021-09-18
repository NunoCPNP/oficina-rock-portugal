import { Container, Header } from './CheckOutWarnings.styles'

const CheckOutWarnings = ({ user }) => {
  return (
    <Container>
      <Header>Please complete your account data before continue to checkout</Header>
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
