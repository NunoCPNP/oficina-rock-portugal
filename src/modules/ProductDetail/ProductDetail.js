import ProductDisplay from "@/components/ProductDisplay";
import SizeSelector from "@/components/SizeSelector";

import { Container } from "./ProductDetail.styles";

const ProductDetail = ({ data }) => {
  console.log("PRODUCTDETAIL DATA: ", data);

  return (
    <Container>
      <div>
        <ProductDisplay data={data.images}/>
      </div>
      <div>
        <SizeSelector data={data.sizes} />
      </div>
    </Container>
  );
};

export default ProductDetail;
