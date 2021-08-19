import useTranslation from "next-translate/useTranslation";

import { useProductState } from "@/hooks/useProduct";

import { Container, Title } from "./Price.styles";

const Price = () => {
  const { t } = useTranslation();
  const { currentProduct } = useProductState();

  return (
    <>
      <Title>Price</Title>
      <Container>
        <div>{`${currentProduct.price} €`}</div>
        <span>{t(`vat-included`)}</span>
      </Container>
    </>
  );
};

export default Price;
