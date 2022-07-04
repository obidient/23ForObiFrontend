import Page from '../components/Page';
import { VillageContext } from '../Context/villageContext';
import '../styles/globals.scss';
import { useState } from 'react';
import { VillageContextProvider } from '../Context/villageContext';
import { AppWrapper } from './../Context/villageContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <VillageContextProvider>
      <Component {...pageProps} />
    </VillageContextProvider>
  );
}

export default MyApp;
