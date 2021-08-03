import Image from "next/image"

import { CartContainer, ItemCountContainer } from "./CartIcon.styles";

const CartIcon= () => {
  const itemCount = 1

  return (
    <CartContainer>
      <Image src="/shopping-bag.svg" alt="" height={24} width={24} />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
