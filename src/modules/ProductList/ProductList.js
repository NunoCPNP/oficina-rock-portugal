import PropTypes from "prop-types";

import ProductCard from "@/components/ProductCard";

import { Container, GridContainer } from "./ProductList.styles";

const ProductList = ({ collection }) => {
  return (
    <Container>
      <GridContainer>
        {collection.length > 0 ? (
          collection.map((item) => (
            <ProductCard
              key={item.uid}
              type={item.type}
              title={item.title}
              band={item.band}
              images={item.images}
              id={item.uid}
              category={item.category}
            />
          ))
        ) : (
          <div>Oops</div>
        )}
      </GridContainer>
    </Container>
  );
};

ProductList.propTypes = {
  collection: PropTypes.array.isRequired,
};

export default ProductList;
