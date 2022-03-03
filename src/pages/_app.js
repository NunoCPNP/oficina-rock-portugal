import DefaultLayout from '../Layout/Default'

import { AuthProvider } from '@/context/AuthContext'
import { ProductProvider } from '@/context/ProductContext'
import { SettingsProvider } from '@/context/SettingsContext'

import GlobalStyles from '@/styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <AuthProvider>
        <ProductProvider>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
          <GlobalStyles />
        </ProductProvider>
      </AuthProvider>
    </SettingsProvider>
  )
}
export default MyApp
