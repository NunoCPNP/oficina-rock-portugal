import Image from "next/image"

import { CartContainer, ItemCountContainer } from "./CartIcon.styles";

type Props = {};

const CartIcon: React.FC<Props> = () => {
  const itemCount = 1

  return (
    <CartContainer>
      <Image src="/shopping-bag.svg" alt="" height={24} width={24} />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
