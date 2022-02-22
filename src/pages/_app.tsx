import '../styles/globals.css'
import type { AppProps } from 'next/app'
import rootReducer from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={rootReducer}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
