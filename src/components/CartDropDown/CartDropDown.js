import useTranslation from 'next-translate/useTranslation'

import CartItem from "@/components/CartItem";

import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./CartDropDown.styles";

const CartDropDown = () => {
  const { t } = useTranslation('common')
  
  const cartItems = [
    {
      id: "1",
      name: "T-Shirt Teste Name",
      imageUrl: "https://img.ltwebstatic.com/images3_pi/2020/12/18/16082685981c88012124cba36da16416553ff8b527_thumbnail_900x.webp",
      quantity:2,
      price: 15
    }
  ];

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>{t(`cart_empty`)}</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          console.log("clicked");
        }}
      >
        {t(`go_to_checkout`)}
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
