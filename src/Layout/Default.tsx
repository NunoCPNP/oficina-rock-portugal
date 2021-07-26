import Header from '../modules/Header'
import Footer from '../modules/Footer'

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout