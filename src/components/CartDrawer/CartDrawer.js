import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import CartItem from '@/components/CartItem'
import CustomButton from '@/components/CustomButton'

import { useProductState } from '@/hooks/useProduct'
import useSettings from '@/hooks/useSettings'

import { total } from '@/utils/total'

import { ButtonContainer, CartContainer, Container, TotalContainer } from './CartDrawer.styles'

const CartDrawer = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const [{ cartOpen }, dispatch] = useSettings()
  const { shoppingBag } = useProductState()

  return (
    <AnimatePresence>
      {cartOpen && (
        <Container initial={{ x: 300 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }}>
          <CartContainer>
            {shoppingBag.length > 0 ? (
              <div>
                <div>
                  {shoppingBag.map((item, index) => (
                    <CartItem key={index} item={item} />
                  ))}
                </div>
                <TotalContainer>{`Total : ${total(shoppingBag)} €`}</TotalContainer>
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
