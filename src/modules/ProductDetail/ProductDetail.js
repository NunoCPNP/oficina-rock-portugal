import Price from "@/components/Price";
import CustomButton from "@/components/CustomButton";
import ProductDescription from "@/components/ProductDescription";
import ProductDisplay from "@/components/ProductDisplay";
import QuantitySelector from "@/components/QuantitySelector";
import SizeSelector from "@/components/SizeSelector";

import useProduct from "@/hooks/useProduct";

import { Container } from "./ProductDetail.styles";

const ProductDetail = ({ data }) => {
  const [state, dispatch] = useProduct();

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
          <CustomButton
            onClick={() => dispatch({ type: "ADD_PRODUCT_TO_BAG" })}
          >
            Add to Bag
          </CustomButton>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
