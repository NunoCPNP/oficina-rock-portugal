import { useProductState } from "@/hooks/useProduct";
import Image from "next/image";

import { CartContainer, ItemCountContainer } from "./CartIcon.styles";

const CartIcon = () => {
  const { shoppingBag } = useProductState();

  return (
    <CartContainer>
      <Image src="/shopping-bag.svg" alt="" height={24} width={24} />
      <ItemCountContainer>{shoppingBag.length}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
