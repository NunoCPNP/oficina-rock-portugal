import LogRocket from "logrocket";
import useTranslation from "next-translate/useTranslation";
import { firestore } from "@/services/firebase";

import CTA from "@/modules/CTA";
import Collection from "@/modules/Collection";
import SectionTitle from "@/components/SectionTitle";

if (typeof window !== "undefined") {
  LogRocket.init("mr3fhc/officina-rock");
}

const Home = ({ collection }) => {
  const { t } = useTranslation("home");

  return (
    <>
      <CTA />
      <SectionTitle title={t(`news`)} />
      <Collection collection={collection} filter="featured" />
    </>
  );
};

export async function getServerSideProps() {
  const collection = [];

  const collectionRef = firestore.collection(`collection`);

  const snapShot = await collectionRef.get();

  snapShot.forEach((document) => collection.push(document.data()));

  return {
    props: {
      collection,
    },
  };
}

export default Home;
