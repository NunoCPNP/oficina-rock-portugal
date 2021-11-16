import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'

import ProductCard from '@/components/ProductCard'

import { Container, Empty, GridContainer } from './ProductList.styles'

const ProductList = ({ collection, promotion }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <GridContainer>
        {collection.length > 0 ? (
          collection.map((item) => (
            <ProductCard
              key={item.uid}
              type={item.type}
              title={item.title}
              band={item.band}
              images={item.images}
              id={item.uid}
              category={item.category}
            />
          ))
        ) : (
          <>{!promotion && <Empty>{t(`empty_category`)}</Empty>}</>
        )}
      </GridContainer>
    </Container>
  )
}

ProductList.propTypes = {
  collection: PropTypes.array.isRequired,
}

export default ProductList
