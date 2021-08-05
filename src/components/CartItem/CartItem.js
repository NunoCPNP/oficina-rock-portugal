import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./CartItem.styles";

const CartItem = ({ item = {} }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={item.imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{item.name}</span>
        <span>
          {item.quantity} x ${item.price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
