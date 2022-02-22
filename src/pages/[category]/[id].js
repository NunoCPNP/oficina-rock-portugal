import dynamic from 'next/dynamic'
import { firestore } from '@/services/firebase'
import useTranslation from 'next-translate/useTranslation'

import ProductDetail from '@/components/ProductDetail'
import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

const DynamicBand = dynamic(() => import('@/modules/Band'))

const Product = ({ data, debug }) => {
  console.log(debug)

  const { t } = useTranslation('common')

  const collectionTitle = data.collection.replaceAll(' ', '-').toLowerCase()
  const section = `${data.type} - ${t(collectionTitle)}`

  return (
    <>
      <SEO title="Oficina Rock Portugal" description={`T-Shirt ${data.band} - ${data.title}`} />
      <SectionTitle title={`${data.band} - ${data.title}`} section={section} offset="4rem" />
      <ProductDetail data={data} />
      {data.bandDescription && <DynamicBand band={data.band} />}
    </>
  )
}

export default Product

export async function getServerSideProps(context) {
  const collectionRef = firestore.collection('collection').doc(`${context.params.id}`)

  const snapShot = await collectionRef.get()
  const data = snapShot.data()

  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {
      data,
      debug: {
        params: context.params,
        query: context.query,
      },
    },
  }
}
