import useTranslation from 'next-translate/useTranslation'
import toast from 'react-hot-toast'

import Price from '@/components/Price'
import CustomButton from '@/components/CustomButton'
import ProductDescription from '@/components/ProductDescription'
import ProductDisplay from '@/components/ProductDisplay'
import QuantitySelector from '@/components/QuantitySelector'
import SizeSelector from '@/components/SizeSelector'

import useProduct from '@/hooks/useProduct'

import { Container } from './ProductDetail.styles'

const ProductDetail = ({ data }) => {
  const [{ currentProduct }, dispatch] = useProduct()
  const { t } = useTranslation('common')

  const message = t(`added-to-bag`, { item: currentProduct.type })

  return (
    <Container>
      <div>
        <ProductDisplay images={data.images} />
      </div>
      <div>
        <SizeSelector product={data} />
        <QuantitySelector />
        <Price />
        <ProductDescription description={data.description} />
        <div>
          <CustomButton
            disable={!currentProduct.quantityAvailable}
            onClick={() => {
              toast.success(message)
              dispatch({ type: 'ADD_PRODUCT_TO_BAG', payload: currentProduct })
            }}
          >
            {currentProduct.quantityAvailable ? t(`add-to-bag`) : t(`out-of-stock`)}
          </CustomButton>
        </div>
      </div>
    </Container>
  )
}

export default ProductDetail
