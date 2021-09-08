import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

const Main = styled.main`
  max-width: 130rem;
  margin: 0 auto;
  padding-top: 11rem;
  min-height: calc(100vh - 34rem);
`

const DynamicHeader = dynamic(() => import('@/modules/Header'))
const DynamicFooter = dynamic(() => import('@/modules/Footer'))
const DynamicCartDrawer = dynamic(() => import('@/modules/CartDrawer'))
const DynamicGDPR = dynamic(() => import('@/modules/GDPR'))
const DynamicToast = dynamic(() => import('@/components/Toast'))

const DefaultLayout = ({ children }) => {
  return (
    <>
      <DynamicHeader />
      <Main>{children}</Main>
      <DynamicFooter />
      <DynamicCartDrawer />
      <DynamicGDPR />
      <DynamicToast />
    </>
  )
}

export default DefaultLayout
