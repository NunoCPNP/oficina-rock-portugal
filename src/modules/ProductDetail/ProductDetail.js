import Price from "@/components/Price";
import ProductDescription from "@/components/ProductDescription";
import ProductDisplay from "@/components/ProductDisplay";
import QuantitySelector from "@/components/QuantitySelector";
import SizeSelector from "@/components/SizeSelector";

import { Container } from "./ProductDetail.styles";

const ProductDetail = ({ data }) => {
  console.log("ProductDetail -->", data);

  return (
    <Container>
      <div>
        <ProductDisplay images={data.images} />
      </div>
      <div>
        <SizeSelector product={data} />
        <Price />
        <QuantitySelector />
        <ProductDescription description={data.description} />
      </div>
    </Container>
  );
};

export default ProductDetail;
