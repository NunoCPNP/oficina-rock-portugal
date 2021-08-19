import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import useTranslation from "next-translate/useTranslation";

import useProduct from "@/hooks/useProduct";

import { Container, OutOfStock, Selector, Title } from "./QuantitySelector.styles";

const QuantitySelector = () => {
  const { t } = useTranslation('common')
  const [{ currentProduct }, dispatch] = useProduct();

  console.log(currentProduct);

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
          <AiFillCaretLeft />
          <div>{currentProduct.quantityAvailable}</div>
          <AiFillCaretRight />
        </Selector>
      )}
    </Container>
  );
};

export default QuantitySelector;
