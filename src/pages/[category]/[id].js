import dynamic from 'next/dynamic'
import { firestore } from '@/services/firebase'

import ProductDetail from '@/components/ProductDetail'
import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

const DynamicBand = dynamic(() => import('@/components/Band'))

const Product = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <SectionTitle title={`${data.band} - ${data.title}`} section={`${data.type}`} offset="4rem" />
      <div>{data.collection}</div>
      <ProductDetail data={data} />
      <DynamicBand band={data.band} />
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
