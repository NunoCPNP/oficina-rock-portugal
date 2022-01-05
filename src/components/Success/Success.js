import { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'

import useLocalStorage from '@/hooks/useLocalStorage'

const Success = () => {
  const { t } = useTranslation()
  const [lStorage, setLStorage] = useLocalStorage('bag')

  useEffect(() => {
    setLStorage([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h2>{t(`order-thanks`)}</h2>
      <p>{t(`order-inbox`)}</p>
    </div>
  )
}

export default Success
