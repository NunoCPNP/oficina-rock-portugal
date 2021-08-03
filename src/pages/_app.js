import DefaultLayout from "../Layout/Default";

import { AuthProvider } from "../context/AuthContext";

import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
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
