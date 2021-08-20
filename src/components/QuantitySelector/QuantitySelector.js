import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import useTranslation from "next-translate/useTranslation";

import useProduct from "@/hooks/useProduct";

import {
  Container,
  OutOfStock,
  Selector,
  Title,
} from "./QuantitySelector.styles";

const QuantitySelector = () => {
  const { t } = useTranslation("common");
  const [{ currentProduct }, dispatch] = useProduct();

  return (
    <Container>
      <Title>{t(`quantity-selector`)}</Title>
      {currentProduct.quantityAvailable <= 0 ? (
        <OutOfStock>
          <div>
            <span>{t(`product`)}</span>
            <span>{t(`out-of-stock`)}</span>
          </div>
        </OutOfStock>
      ) : (
        <Selector>
          <AiFillCaretLeft
            onClick={() => {
              if (currentProduct.quantitySelected > 1) {
                dispatch({
                  type: "CHANGE_CURRENT_PRODUCT_QUANTITY",
                  payload: currentProduct.quantitySelected - 1,
                });
              }
            }}
          />
          <div>{currentProduct.quantitySelected}</div>
          <AiFillCaretRight
            onClick={() =>
              dispatch({
                type: "CHANGE_CURRENT_PRODUCT_QUANTITY",
                payload: currentProduct.quantitySelected + 1,
              })
            }
          />
        </Selector>
      )}
    </Container>
  );
};

export default QuantitySelector;
