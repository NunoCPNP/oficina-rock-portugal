const CheckOutWarnings = ({ user }) => {
  return (
    <>
      <div>Fix this before continue to checkout</div>
      {user.phoneNumber === '' && <div>No phone</div>}
      {user.deliveryAddress.street === '' && <div>No street</div>}
      {user.deliveryAddress.postalCode === '' && <div>No postal code</div>}
      {user.deliveryAddress.city === '' && <div>No city</div>}
      {user.deliveryAddress.country === '' && <div>No country</div>}
      {user.deliverySameAsBilling === '' && <div>No billing address</div>}
    </>
  )
}

export default CheckOutWarnings
