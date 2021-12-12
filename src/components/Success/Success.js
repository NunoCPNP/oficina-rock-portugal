import { useEffect } from 'react'

import useLocalStorage from '@/hooks/useLocalStorage'

const Success = () => {
  const [lStorage, setLStorage] = useLocalStorage('bag')

  useEffect(() => {
    setLStorage([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h2>Thanks for your order !</h2>
      <p>Check your inbox for the receipt</p>
    </div>
  )
}

export default Success
