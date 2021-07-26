import { Provider } from 'react-redux'
import type { AppProps } from "next/app";

import { useStore } from '../store/store'

import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyles />
    </Provider>
  );
}
export default MyApp;
