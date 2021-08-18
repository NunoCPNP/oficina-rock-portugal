import Price from "@/components/Price";
import ProductDisplay from "@/components/ProductDisplay";
import SizeSelector from "@/components/SizeSelector";

import { Container } from "./ProductDetail.styles";

const ProductDetail = ({ data }) => {
  return (
    <Container>
      <div>
        <ProductDisplay images={data.images}/>
      </div>
      <div>
        <SizeSelector product={data} />
        <Price />
      </div>
    </Container>
  );
};

export default ProductDetail;
