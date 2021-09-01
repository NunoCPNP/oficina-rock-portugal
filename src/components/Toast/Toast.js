import { AnimatePresence } from 'framer-motion'

import { Container } from './Toast.styles'

import { useSettingsState } from '@/hooks/useSettings'

const Toast = () => {
  const { toast } = useSettingsState()

  return (
    <AnimatePresence>
      {toast.show && (
        <Container initial={{ x: 300 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }} type={toast.type}>
          {toast.message}
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Toast
