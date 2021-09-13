import { Toaster } from 'react-hot-toast'

import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

const Main = styled.main`
  max-width: 130rem;
  margin: 0 auto;
  padding-top: 11rem;
  min-height: calc(100vh - 34rem);
`

const DynamicHeader = dynamic(() => import('@/components/Header'))
const DynamicFooter = dynamic(() => import('@/components/Footer'))
const DynamicCartDrawer = dynamic(() => import('@/components/CartDrawer'))
const DynamicGDPR = dynamic(() => import('@/components/GDPR'))

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <DynamicHeader />
      <Main>{children}</Main>
      <DynamicFooter />
      <DynamicCartDrawer />
      <DynamicGDPR />
    </>
  )
}

export default DefaultLayout
