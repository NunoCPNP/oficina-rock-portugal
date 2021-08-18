import { useProductState } from "@/hooks/useProduct";

import { Container } from "./Price.styles";

const Price = () => {
  const { currentProduct } = useProductState();

  return (
    <Container>
      <div>{`${currentProduct.price} €`}</div>
      <span>(IVA incluido)</span>
    </Container>
  );
};

export default Price;
