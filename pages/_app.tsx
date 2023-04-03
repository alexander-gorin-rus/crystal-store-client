import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import { Provider } from 'react-redux';
// import { store } from '../redux/store';
import { oswald } from '../utils/global-font';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from '../redux/api/apiSlice';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
    <ApiProvider api={apiSlice}>
      <main className={oswald.className}>
        <Component {...pageProps} />
      </main>
    </ApiProvider>
      
    // </Provider>
    
  )
}
