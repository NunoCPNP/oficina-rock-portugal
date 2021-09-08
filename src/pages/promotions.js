import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'
import ProductList from '@/modules/ProductList'

import NewsLetter from '@/modules/NewsLetter'

import { firestore } from '@/services/firebase'

const Promotions = ({ collection }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <SEO title="Oficina Rock Portugal" description="" />
      <SectionTitle title={t(`promotions`)} offset="4rem" />
      <ProductList collection={collection} promotion />
      <NewsLetter message={t(`no-promotion-newsletter-message`)} />
    </Container>
  )
}

const Container = styled.div`
  min-height: calc(100vh - 33rem);
`

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
