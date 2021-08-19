import Price from "@/components/Price";
import CustomButton from "@/components/CustomButton";
import ProductDescription from "@/components/ProductDescription";
import ProductDisplay from "@/components/ProductDisplay";
import QuantitySelector from "@/components/QuantitySelector";
import SizeSelector from "@/components/SizeSelector";

import { Container } from "./ProductDetail.styles";

const ProductDetail = ({ data }) => {
  return (
    <Container>
      <div>
        <ProductDisplay images={data.images} />
      </div>
      <div>
        <SizeSelector product={data} />
        <QuantitySelector />
        <Price />
        <ProductDescription description={data.description} />
        <div>
          <CustomButton inverted>Add to Bag</CustomButton>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
