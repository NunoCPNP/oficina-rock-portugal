import { AiOutlineShoppingCart } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'
import Price from '@/components/Price'
import ProductDescription from '@/components/ProductDescription'
import ProductDisplay from '@/components/ProductDisplay'
import QuantitySelector from '@/components/QuantitySelector'
import SizeSelector from '@/components/SizeSelector'

import useProduct from '@/hooks/useProduct'

import { ButtonContainer, ButtonWrapper, Container } from './ProductDetail.styles'

const ProductDetail = ({ data }) => {
  const router = useRouter()

  const [{ currentProduct }, dispatch] = useProduct()
  const { t } = useTranslation('common')

  const message = t(`added-to-bag`, { item: currentProduct.type })

  return (
    <Container>
      <div>
        <ProductDisplay images={data.images} collection={data.collection} />
      </div>
      <div>
        <SizeSelector product={data} />
        <QuantitySelector />
        <Price />
        <ProductDescription description={data.description} />
        <ButtonContainer>
          <>
            {currentProduct.quantityAvailable ? (
              <CustomButton
                onClick={() => {
                  toast.success(message)
                  dispatch({ type: 'ADD_PRODUCT_TO_BAG', payload: currentProduct })
                }}
              >
                <ButtonWrapper>
                  <AiOutlineShoppingCart />
                  {t(`add-to-bag`)}
                </ButtonWrapper>
              </CustomButton>
            ) : (
              <CustomButton disable>{t(`out-of-stock`)}</CustomButton>
            )}
          </>
          <CustomButton inverted onClick={() => router.push('/checkout')}>
            {t(`go-to-bag`)}
          </CustomButton>
        </ButtonContainer>
      </div>
    </Container>
  )
}

export default ProductDetail
