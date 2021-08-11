import DefaultLayout from "../Layout/Default";

import { AuthProvider } from "@/context/AuthContext";
import { SettingsProvider } from "@/context/SettingsContext";
import { CollectionProvider } from "@/context/CollectionContext";

import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <CollectionProvider>
        <AuthProvider>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
          <GlobalStyles />
        </AuthProvider>
      </CollectionProvider>
    </SettingsProvider>
  );
}
export default MyApp;
