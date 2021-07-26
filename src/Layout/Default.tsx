import Header from '../modules/Header'
import Footer from '../modules/Footer'

type Props = {
  children: JSX.Element
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout