import useTranslation from "next-translate/useTranslation";
import { AnimatePresence } from "framer-motion";

import CustomButton from "@/components/CustomButton";
import CartItem from "@/components/CartItem";

import { useSettingsState } from "@/hooks/useSettings";

import { Container, CartContainer, ButtonContainer } from "./CartDrawer.styles";

const CartDrawer = () => {
  const { t } = useTranslation("common");
  const { cartOpen } = useSettingsState();

  return (
    <AnimatePresence>
      {cartOpen && (
        <Container
          initial={{ x: 300 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
        >
          <CartContainer>
            <div>{t(`cart_empty`)}</div>
          </CartContainer>
          <ButtonContainer>
            <CustomButton inverted>{t(`go_to_checkout`)}</CustomButton>
          </ButtonContainer>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
