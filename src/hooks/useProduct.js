import { useContext } from 'react'

import { ProductDispatchContext, ProductStateContext } from '@/context/ProductContext'

export const useProductState = () => {
  const context = useContext(ProductStateContext)

  return context
}

export const useProductDispatch = () => {
  const context = useContext(ProductDispatchContext)

  return context
}

const useProduct = () => {
  return [useProductState(), useProductDispatch()]
}

export default useProduct
