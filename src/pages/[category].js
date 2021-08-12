import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { firestore } from "@/services/firebase";

import Collection from "@/modules/Collection";
import SectionTitle from "@/components/SectionTitle";

const Category = ({ collection }) => {
  const { query } = useRouter();
  const { t } = useTranslation()

  return (
    <>
      <SectionTitle title={t(`${query.category} `)} />
      <Collection collection={collection} filter="category" filterValue={query.category} />
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

export default Category;
