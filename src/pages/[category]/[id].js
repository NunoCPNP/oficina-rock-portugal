import { firestore } from "@/services/firebase";

import SectionTitle from "@/components/SectionTitle";
import ProductDetail from "@/modules/ProductDetail";

const Product = ({ data }) => {
  return (
    <>
      <SectionTitle
        title={`${data.band} - ${data.title}`}
        section={`${data.type}`}
        offset="4rem"
      />
      <ProductDetail data={data} />
    </>
  );
};

export default Product;

export async function getServerSideProps(context) {
  const collectionRef = firestore
    .collection("collection")
    .doc(`${context.query.id}`);

  const snapShot = await collectionRef.get();

  return {
    props: {
      data: snapShot.data(),
    },
  };
}
