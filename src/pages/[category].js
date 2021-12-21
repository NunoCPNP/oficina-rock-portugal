import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import ProductList from '@/components/ProductList'
import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

import { firestore } from '@/services/firebase'

const Category = ({ collection }) => {
  const { query } = useRouter()
  const { t } = useTranslation('common')

  return (
    <>
      <SEO title="Oficina Rock Portugal" />
      <SectionTitle title={t(`${query.category}`)} offset="4rem" />
      <ProductList collection={collection} />
    </>
  )
}

export async function getServerSideProps(context) {
  const collection = []

  const collectionRef = firestore.collection(`collection`).where('category', '==', context.query.category)

  const snapShot = await collectionRef.get()

  snapShot.forEach((document) => collection.push(document.data()))

  return {
    props: {
      collection,
    },
  }
}

export default Category
