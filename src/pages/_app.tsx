import type { AppProps } from "next/app";

import DefaultLayout from "../Layout/Default";

import { AuthProvider } from "../context/AuthContext";

import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <GlobalStyles />
    </AuthProvider>
  );
}
export default MyApp;
