import { AnimatePresence } from 'framer-motion'
import cookie from 'cookie-cutter'
import { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'

import useSettings from '@/hooks/useSettings'

import { ButtonContainer, Container, TextContainer } from './GDPR.style'

const GDPR = () => {
  const { t } = useTranslation('common')
  const [state, dispatch] = useSettings()

  useEffect(() => {
    if (cookie.get('OFICINA_ROCK_GDPR') && state.gdprOpen) {
      dispatch({ type: 'TOGGLE_GDPR' })
    }
  }, [state, dispatch])

  return (
    <AnimatePresence>
      {state.gdprOpen && (
        <Container data-cy="gdpr" initial={{ y: 200 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 200, opacity: 0 }}>
          <TextContainer>{t(`gdpr`)}</TextContainer>
          <ButtonContainer>
            <CustomButton
              inverted
              data-cy="gdpr-button"
              onClick={() => {
                var expiryDate = new Date()
                expiryDate.setMonth(expiryDate.getMonth() + 1)

                cookie.set('OFICINA_ROCK_GDPR', true, { expires: expiryDate })
                dispatch({ type: 'TOGGLE_GDPR' })
              }}
            >
              {t(`accept`)}
            </CustomButton>
          </ButtonContainer>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default GDPR
