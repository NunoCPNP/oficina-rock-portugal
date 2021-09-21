import { useEffect } from 'react'
import { useRouter } from 'next/router'

import DefaultLayout from '../Layout/Default'

import { AuthProvider } from '@/context/AuthContext'
import { SettingsProvider } from '@/context/SettingsContext'
import { ProductProvider } from '@/context/ProductContext'

import * as ga from '@/services/analytics'

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

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
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
