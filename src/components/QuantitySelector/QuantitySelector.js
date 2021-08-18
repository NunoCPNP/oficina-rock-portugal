import useProduct from "@/hooks/useProduct";

import { Container, OutOfStock } from "./QuantitySelector.styles";

const QuantitySelector = () => {
  const [{ currentProduct }, dispatch] = useProduct();

  console.log(currentProduct);

  return (
    <Container>
      {currentProduct.quantityAvailable <= 0 ? (
        <OutOfStock>
          <div>
            <span>Product</span>
            <span>Out of Stock</span>
          </div>
        </OutOfStock>
      ) : (
        <div>{currentProduct.quantityAvailable}</div>
      )}
    </Container>
  );
};

export default QuantitySelector;
