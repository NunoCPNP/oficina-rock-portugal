import useTranslation from "next-translate/useTranslation";

import { useProductState } from "@/hooks/useProduct";

import { Container, Title } from "./Price.styles";

const Price = () => {
  const { t } = useTranslation('common');
  const { currentProduct } = useProductState();

  const price = currentProduct.price * currentProduct.quantitySelected

  return (
    <>
      <Title>{t(`price`)}</Title>
      <Container>
        <div>{`${price} €`}</div>
        <span>{t(`vat-included`)}</span>
      </Container>
    </>
  );
};

export default Price;
