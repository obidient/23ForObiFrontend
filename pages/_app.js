import Page from '../components/Page';
import { VillageContext } from '../Context/villageContext';
import '../styles/globals.scss';
import { useState } from 'react';
import { VillageContextProvider } from '../Context/villageContext';
import { AppWrapper } from './../Context/villageContextProvider';
import { CountryContextProvider } from './../Context/countryContext';
import StateContext from '../Context/StateContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

function MyApp({ Component, pageProps }) {
  const { states, ...rest } = pageProps;

  return (
    <GoogleOAuthProvider
      clientId={`${
        process.env.GOOGLE_CLIENT_ID
      }`}
    >
      <CountryContextProvider initialData={pageProps?.initialData}>
        <StateContext.Provider value={{ states }}>
          <VillageContextProvider>
            <Component {...pageProps} />
          </VillageContextProvider>
        </StateContext.Provider>
      </CountryContextProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
