import DefaultLayout from "../Layout/Default";

import { AuthProvider } from "../context/AuthContext";
import { SettingsProvider } from "../context/SettingsContext";

import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <AuthProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <GlobalStyles />
      </AuthProvider>
    </SettingsProvider>
  );
}
export default MyApp;
