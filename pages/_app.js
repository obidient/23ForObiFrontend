import Page from '../components/Page';
import { VillageContext } from '../Context/villageContext';
import '../styles/globals.scss';
import { useState } from 'react';
import { VillageContextProvider } from '../Context/villageContext';
import { AppWrapper } from './../Context/villageContextProvider';
import { CountryContextProvider } from './../Context/countryContext';

function MyApp({ Component, pageProps }) {
  return (
    <CountryContextProvider initialData={pageProps?.initialData}>
      <VillageContextProvider>
          <Component {...pageProps} />
      </VillageContextProvider>
    </CountryContextProvider>
  );
}

export default MyApp;
