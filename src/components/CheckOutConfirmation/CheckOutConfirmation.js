import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'
import Modal from '@/components/Modal'
import Payment from '@/components/Payment'
import SectionTitle from '@/components/SectionTitle'

import { total } from '@/utils/total'

import useOnClickOutside from '@/hooks/useOnClickOutside'
import { useProductState } from '@/hooks/useProduct'

import { ButtonContainer } from './CheckOutConfirmation.styles'

const CheckOutConfirmation = ({ confirmation, setConfirmation }) => {
  const ref = useRef()
  const router = useRouter()
  const { t } = useTranslation('common')
  const { shoppingBag } = useProductState()
  const [openConfirmation, setOpenConfirmation] = useState(false)

  const calculatedTotal = total(shoppingBag)
  useOnClickOutside(ref, () => setOpenConfirmation(false))

  if (shoppingBag.length === 0) return null

  if ((confirmation === true) & (shoppingBag.length > 0)) return <Payment total={calculatedTotal} />

  if (confirmation === true) return null

  return (
    <>
      {!openConfirmation && (
        <>
          <SectionTitle title={t(`checkout-confirmation`)} />
          <ButtonContainer>
            <CustomButton onClick={() => setOpenConfirmation(true)}>{t(`proceed-to-payment`)}</CustomButton>
            <CustomButton inverted onClick={() => router.push('/')}>
              {t(`back-to-shop`)}
            </CustomButton>
          </ButtonContainer>
        </>
      )}
      <AnimatePresence>
        {openConfirmation && (
          <motion.div ref={ref} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Modal>
              <ButtonContainer>
                <CustomButton onClick={() => setConfirmation(true)}>Yes</CustomButton>
                <CustomButton inverted onClick={() => setOpenConfirmation(false)}>
                  No
                </CustomButton>
              </ButtonContainer>
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CheckOutConfirmation
