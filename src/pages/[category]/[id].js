import dynamic from 'next/dynamic'
import { firestore } from '@/services/firebase'
import useTranslation from 'next-translate/useTranslation'

import ProductDetail from '@/components/ProductDetail'
import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

const DynamicBand = dynamic(() => import('@/components/Band'))

const Product = ({ data }) => {
  const { t } = useTranslation('common')

  const section = `${data.type} - ${t(data.collection)}`

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <SectionTitle title={`${data.band} - ${data.title}`} section={section} offset="4rem" />
      <ProductDetail data={data} />
      {data.bandDescription && <DynamicBand band={data.band} />}
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
