import useTranslation from "next-translate/useTranslation";
import { firestore } from "@/services/firebase";

import CTA from "@/modules/CTA";
import ProductList from "@/modules/ProductList";
import SectionTitle from "@/components/SectionTitle";

const Home = ({ collection }) => {
  const { t } = useTranslation("home");

  return (
    <>
      <CTA />
      <SectionTitle title={t(`news`)} />
      <ProductList collection={collection} />
    </>
  );
};

export async function getServerSideProps() {
  const collection = [];

  const collectionRef = firestore.collection(`collection`).where("featured", "==", true);

  const snapShot = await collectionRef.get();

  snapShot.forEach((document) => collection.push(document.data()));

  return {
    props: {
      collection,
    },
  };
}

export default Home;
