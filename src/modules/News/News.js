import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";

import useCollection from "@/hooks/useCollection";

const News = ({ sectionTitle }) => {
  const { collection } = useCollection();

  return (
    <>
      <SectionTitle title={sectionTitle} />
      {collection &&
        collection.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            band={item.band}
            images={item.images}
          />
        ))}
    </>
  );
};

export default News;
