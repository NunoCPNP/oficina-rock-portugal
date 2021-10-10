import { useEffect } from 'react'
import { useRouter } from 'next/router'

import DefaultLayout from '../Layout/Default'

import Maintenance from '@/components/Maintenance/Maintenance'

import { AuthProvider } from '@/context/AuthContext'
import { ProductProvider } from '@/context/ProductContext'
import { SettingsProvider } from '@/context/SettingsContext'

import { toBoolean } from '@/utils/toBoolean'

import GlobalStyles from '@/styles/GlobalStyles'

export function reportWebVitals({ id, name, label, value }) {
  window.gtag('event', name, {
    event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true,
  })
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const handleRouteChange = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, {
      page_path: url,
    })
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  if (toBoolean(process.env.NEXT_PUBLIC_MAINTENANCE)) {
    return (
      <>
        <Maintenance />
        <GlobalStyles />
      </>
    )
  }

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
