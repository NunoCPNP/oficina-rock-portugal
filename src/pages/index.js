import LogRocket from "logrocket";
import useTranslation from "next-translate/useTranslation"
import { useEffect } from "react";
import { firestore } from "@/services/firebase";

import useCollection from "@/hooks/useCollection";

import CTA from "@/modules/CTA";
import News from "@/modules/News";

if (typeof window !== "undefined") {
  LogRocket.init("mr3fhc/officina-rock");
}

const Home = ({ collection }) => {
  const { setCollection } = useCollection();
  const { t } = useTranslation('home')

  useEffect(() => setCollection(collection), []);

  return (
    <main>
      <CTA />
      <News sectionTitle={t(`news`)} />
    </main>
  );
};

export async function getServerSideProps(context) {
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
