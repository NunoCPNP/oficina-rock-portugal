import DefaultLayout from "../Layout/Default";

import { AuthProvider } from "@/context/AuthContext";
import { SettingsProvider } from "@/context/SettingsContext";
import { ProductProvider } from "@/context/ProductContext";

import GlobalStyles from "../styles/GlobalStyles";

export function reportWebVitals(metric) {
  if (metric.label === 'custom') {
    console.log(metric)
  }
}

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
  );
}
export default MyApp;
