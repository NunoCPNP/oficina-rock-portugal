import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

import useProduct from "@/hooks/useProduct";

import { Container, SizesContainer, Title, Size } from "./SizeSelector.styles";

const SizeSelector = ({ product }) => {
  const [state, dispatch] = useProduct();
  const { t } = useTranslation('common');
  const { currentProduct } = state;

  useEffect(() => {
    const inStock = product.sizes.filter((item) => item.quantity > 0)[0];

    dispatch({
      type: "SELECT_CURRENT_PRODUCT",
      payload: {
        uid: product.uid,
        size: inStock.size,
        price: inStock.price,
        quantityAvailable: inStock.quantity,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>{t(`size-selector`)}</Title>
      <SizesContainer>
        {product.sizes.map((size) => {
          const selected = currentProduct.size === size.size;

          return (
            <Size
              key={size.size}
              selected={selected}
              onClick={() =>
                dispatch({
                  type: "CHANGE_CURRENT_PRODUCT_SIZE",
                  payload: {
                    size: size.size,
                    price: size.price,
                    quantityAvailable: size.quantity,
                  },
                })
              }
            >
              {size.size}
            </Size>
          );
        })}
      </SizesContainer>
    </Container>
  );
};

export default SizeSelector;
