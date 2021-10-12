import { Toaster } from 'react-hot-toast'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'

const DynamicSlot = dynamic(() => import('@/components/Slot'))
const DynamicHeader = dynamic(() => import('@/components/Header'))
const DynamicFooter = dynamic(() => import('@/components/Footer'))
const DynamicCartDrawer = dynamic(() => import('@/components/CartDrawer'))
const DynamicGDPR = dynamic(() => import('@/components/GDPR'))

const Main = styled.main`
  max-width: 130rem;
  margin: 0 auto;
  min-height: 100vh;
`

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            padding: '1.6rem',
            backgroundColor: 'var(--darkLiver)',
            color: 'var(--snow)',
            textTransform: 'uppercase',
            fontWeight: '700',
          },
        }}
        position="bottom-right"
        reverseOrder={false}
      />
      <DynamicSlot />
      <DynamicHeader />
      <Main>{children}</Main>
      <DynamicFooter />
      <DynamicCartDrawer />
      <DynamicGDPR />
    </>
  )
}

export default DefaultLayout
