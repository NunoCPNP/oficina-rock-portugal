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
      <Collection collection={collection} />
    </>
  );
};

export async function getServerSideProps(context) {
  const collection = [];

  const collectionRef = firestore.collection(`collection`).where("category", "==", context.query.category);

  const snapShot = await collectionRef.get();

  snapShot.forEach((document) => collection.push(document.data()));

  return {
    props: {
      collection,
    },
  };
}
 
export default Category;
