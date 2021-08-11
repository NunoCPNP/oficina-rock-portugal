import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";

import useCollection from "@/hooks/useCollection";

import { Container, GridContainer } from "./News.styles";

const News = ({ sectionTitle }) => {
  const { collection } = useCollection();

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
            />
          ))}
      </GridContainer>
    </Container>
  );
};

export default News;
