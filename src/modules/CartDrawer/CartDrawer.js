import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import CustomButton from "@/components/CustomButton";
import CartItem from "@/components/CartItem";

import { useSettingsState } from "@/hooks/useSettings";
import useProduct from "@/hooks/useProduct";

import { Container, CartContainer, ButtonContainer } from "./CartDrawer.styles";

const CartDrawer = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { cartOpen } = useSettingsState();
  const [{ shoppingBag }, dispatch] = useProduct();

  return (
    <AnimatePresence>
      {cartOpen && (
        <Container
          initial={{ x: 300 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
        >
          <CartContainer>
            {shoppingBag.length > 0 ? (
              <div>
                {shoppingBag.map((item, index) => {
                  console.log(item)
                  return (
                    <CartItem key={index} item={item}/>
                  )
                })}
              </div>
            ) : (
              <div>{t(`cart-empty`)}</div>
            )}
          </CartContainer>
          <ButtonContainer>
            <CustomButton inverted onClick={() => router.push("/checkout")}>
              {t(`go-to-checkout`)}
            </CustomButton>
          </ButtonContainer>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
