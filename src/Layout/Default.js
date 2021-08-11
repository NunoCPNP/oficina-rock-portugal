import styled from "@emotion/styled"

import Header from '@/modules/Header'
import Footer from '@/modules/Footer'

const Main = styled.main`
  max-width: 130rem;
  margin: 0 auto;
`

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default DefaultLayout