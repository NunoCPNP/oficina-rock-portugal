import { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'

import useProduct from '@/hooks/useProduct'

import { Container, SizesContainer, Title, Size } from './SizeSelector.styles'

const SizeSelector = ({ product }) => {
  const [state, dispatch] = useProduct()
  const { t } = useTranslation('common')

  const { currentProduct } = state

  useEffect(() => {
    const inStock = product.sizes.filter((item) => item.quantity > 0)[0]

    dispatch({
      type: 'SELECT_CURRENT_PRODUCT',
      payload: {
        uid: product.uid,
        type: product.type,
        band: product.band,
        title: product.title,
        image: product.images[0],
        size: inStock ? inStock.size : product.sizes[0].size,
        price: inStock ? inStock.price : product.sizes[0].price,
        quantityAvailable: inStock ? inStock.quantity : 0,
        quantitySelected: inStock ? (inStock.quantity > 0 ? 1 : 0) : 0,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Title>{t(`size-selector`)}</Title>
      <SizesContainer>
        {product.sizes.map((size) => {
          const selected = currentProduct.size === size.size

          return (
            <Size
              key={size.size}
              selected={selected}
              onClick={() =>
                dispatch({
                  type: 'CHANGE_CURRENT_PRODUCT_SIZE',
                  payload: {
                    size: size.size,
                    price: size.price,
                    quantityAvailable: size.quantity,
                    quantitySelected: size.quantity > 0 ? 1 : 0,
                  },
                })
              }
            >
              {size.size}
            </Size>
          )
        })}
      </SizesContainer>
    </Container>
  )
}

export default SizeSelector
