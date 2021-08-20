import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./CartItem.styles";

const CartItem = ({ item = {} }) => {

  return (
    <CartItemContainer>
      {/* <CartItemImage src={item.imageUrl} alt="" /> */}
      <CartItemImage src="/20210514165502_4735995265_DZ.jpg" alt="" />
      <ItemDetailsContainer>
        {/* <span>{item.name}</span> */}
        <span>teste</span>
        <span>
          {item.quantitySelected} x ${item.price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
