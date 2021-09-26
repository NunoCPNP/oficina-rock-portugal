import useTranslation from 'next-translate/useTranslation'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import CustomButton from '@/components/CustomButton'
import CartItem from '@/components/CartItem'

import useSettings from '@/hooks/useSettings'
import { useProductState } from '@/hooks/useProduct'
import useOnClickOutside from '@/hooks/useOnClickOutside'

import { Container, CartContainer, ButtonContainer } from './CartDrawer.styles'

const CartDrawer = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const [{ cartOpen }, dispatch] = useSettings()
  const { shoppingBag } = useProductState()

  const ref = useRef()
  useOnClickOutside(ref, () => dispatch({ type: 'TOGGLE_CART' }))

  return (
    <AnimatePresence>
      {cartOpen && (
        <Container ref={ref} initial={{ x: 300 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }}>
          <CartContainer>
            {shoppingBag.length > 0 ? (
              <div>
                {shoppingBag.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </div>
            ) : (
              <div>{t(`cart-empty`)}</div>
            )}
          </CartContainer>
          <ButtonContainer>
            <CustomButton
              inverted
              onClick={() => {
                router.push('/checkout')
                dispatch({ type: 'TOGGLE_CART' })
              }}
            >
              {t(`go-to-checkout`)}
            </CustomButton>
          </ButtonContainer>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
