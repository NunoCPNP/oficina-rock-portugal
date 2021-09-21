import { useEffect } from 'react'
import { useRouter } from 'next/router'

import DefaultLayout from '../Layout/Default'

import { AuthProvider } from '@/context/AuthContext'
import { SettingsProvider } from '@/context/SettingsContext'
import { ProductProvider } from '@/context/ProductContext'

import GlobalStyles from '../styles/GlobalStyles'

const sendAnalytics = ({ name, value }) => {
  if (process.env.NEXT_PUBLIC_SEND_ANALYTICS) {
    const url = `https://qckm.io?m=${name}&v=${value}&k=${process.env.NEXT_PUBLIC_QUICK_METRICS_API_KEY}`

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url)
    } else {
      fetch(url, { method: 'POST', keepalive: true })
    }
  } else {
    console.warn('The Analytics feature is disabled')
  }
}

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'Next.js-hydration':
      sendAnalytics(metric)
      break

    case 'Next.js-route-change-to-render':
      sendAnalytics(metric)
      break

    case 'Next.js-render':
      sendAnalytics(metric)
      break

    default:
      break
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const handleRouteChange = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    })
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
