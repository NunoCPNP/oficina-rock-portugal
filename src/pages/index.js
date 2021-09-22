import useTranslation from 'next-translate/useTranslation'
import { firestore } from '@/services/firebase'

import SEO from '@/components/SEO'
import CTA from '@/components/CTA'
import ProductList from '@/components/ProductList'
import SectionTitle from '@/components/SectionTitle'
import TopBanner from '@/components/TopBanner'

const Home = ({ collection }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="Oficina Rock Portugal" />
      <TopBanner />
      <CTA />
      <SectionTitle title={t(`news`)} />
      <ProductList collection={collection} />
    </>
  )
}

export async function getServerSideProps() {
  const collection = []

  const collectionRef = firestore.collection(`collection`).where('featured', '==', true)

  const snapShot = await collectionRef.get()

  snapShot.forEach((document) => collection.push(document.data()))

  return {
    props: {
      collection,
    },
  }
}

export default Home
