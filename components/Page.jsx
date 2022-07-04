import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar/Index';
import Footer from './Footer/Index';

const Page = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title}` : '23Forobi'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Page;
