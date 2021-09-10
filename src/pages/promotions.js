import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'
import ProductList from '@/components/ProductList'

import NewsLetter from '@/components/NewsLetter'

import { firestore } from '@/services/firebase'

const Promotions = ({ collection }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <SectionTitle title={t(`promotions`)} offset="4rem" />
      <ProductList collection={collection} promotion />
      <NewsLetter message={t(`no-promotion-newsletter-message`)} />
    </>
  )
}

export async function getServerSideProps() {
  const collection = []

  const collectionRef = firestore.collection(`collection`).where('promo', '==', true)

  const snapShot = await collectionRef.get()

  snapShot.forEach((document) => collection.push(document.data()))

  return {
    props: {
      collection,
    },
  }
}

export default Promotions
