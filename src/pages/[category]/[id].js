import { firestore } from '@/services/firebase'

import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'
import ProductDetail from '@/components/ProductDetail'

const Product = ({ data }) => {
  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <SectionTitle title={`${data.band} - ${data.title}`} section={`${data.type}`} offset="4rem" />
      <ProductDetail data={data} />
    </>
  )
}

export default Product

export async function getServerSideProps(context) {
  const collectionRef = firestore.collection('collection').doc(`${context.query.id}`)

  const snapShot = await collectionRef.get()

  return {
    props: {
      data: snapShot.data(),
    },
  }
}
