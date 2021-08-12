import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ProductCard from "@/components/ProductCard";

import { Container, GridContainer } from "./Collection.styles";

const Collection = ({ collection, filter, filterValue }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filter === "featured") {
      setData(collection?.filter((item) => item.featured === true));
    }

    if(filter === "category") {
      setData(collection?.filter((item) => item.category === filterValue))
    }
  }, [filter, collection])

  return (
    <Container>
      <GridContainer>
        {data.map((item) => (
          <ProductCard
            key={item.uid}
            type={item.type}
            title={item.title}
            band={item.band}
            images={item.images}
            id={item.uid}
            category={item.category}
          />
        ))}
      </GridContainer>
    </Container>
  );
};

Collection.propTypes = {
  collection: PropTypes.array.isRequired,
};

export default Collection;
