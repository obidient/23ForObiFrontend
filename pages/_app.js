import Page from '../components/Page';
import { VillageContext } from '../Context/villageContext';
import '../styles/globals.scss';
import { useState } from 'react';
import { VillageContextProvider } from '../Context/villageContext';
import { AppWrapper } from './../Context/villageContextProvider';
import { CountryContextProvider } from './../Context/countryContext';
import StateContext from '../Context/StateContext';

function MyApp({ Component, pageProps }) {
  const { states, ...rest } = pageProps;

 
  return (
    <CountryContextProvider initialData={pageProps?.initialData}>
      <StateContext.Provider value={{ states }}>
        <VillageContextProvider>
          <Component {...pageProps} />
        </VillageContextProvider>
      </StateContext.Provider>
    </CountryContextProvider>
  );
}

export default MyApp;
