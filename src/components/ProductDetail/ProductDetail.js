import { useRef, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiResize } from 'react-icons/gi'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'
import Measurements from '@/components/Measurements'
import Modal from '@/components/Modal'
import Price from '@/components/Price'
import ProductDescription from '@/components/ProductDescription'
import ProductDisplay from '@/components/ProductDisplay'
import QuantitySelector from '@/components/QuantitySelector'
import SizeSelector from '@/components/SizeSelector'

import useOnClickOutside from '@/hooks/useOnClickOutside'
import useProduct from '@/hooks/useProduct'

import { ButtonContainer, ButtonWrapper, Container, SizeGuide } from './ProductDetail.styles'

const ProductDetail = ({ data }) => {
  const [openSizeGuide, setOpenSizeGuide] = useState(false)
  const router = useRouter()
  const ref = useRef()

  const [{ currentProduct }, dispatch] = useProduct()
  const { t } = useTranslation('common')

  const message = t(`added-to-bag`, { item: currentProduct.type })

  useOnClickOutside(ref, () => setOpenSizeGuide(false))

  return (
    <>
      <Container>
        <div>
          <ProductDisplay images={data.images} />
        </div>
        <div>
          <SizeSelector product={data} />
          <SizeGuide>
            <GiResize />
            <div>
              <a onClick={() => setOpenSizeGuide(true)}>Size guide</a>
            </div>
          </SizeGuide>
          <QuantitySelector />
          <Price />
          <ProductDescription description={data.description} />
          <ButtonContainer>
            <div>
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
            </div>
            <div>
              <CustomButton inverted onClick={() => router.push('/checkout')}>
                {t(`go-to-bag`)}
              </CustomButton>
            </div>
          </ButtonContainer>
        </div>
      </Container>
      {openSizeGuide && (
        <div ref={ref}>
          <Modal>
            <Measurements />
          </Modal>
        </div>
      )}
    </>
  )
}

export default ProductDetail
