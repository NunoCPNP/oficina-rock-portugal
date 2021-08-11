import PropTypes from "prop-types";

import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";

import { Container, GridContainer } from "./News.styles";

const News = ({ sectionTitle, collection }) => {
  const filtedCollection = collection?.filter((item) => item.featured === true);

  return (
    <Container>
      <SectionTitle title={sectionTitle} />
      <GridContainer>
        {filtedCollection &&
          filtedCollection.map((item) => (
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

News.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired,
};

export default News;
