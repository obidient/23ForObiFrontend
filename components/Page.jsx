import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar/Index';
import Footer from './Footer/Index';

const Page = ({ title, description, children }) => {
  const editTitle = title.includes(undefined) ? 'loading...' : title;
  return (
    <>
      <Head>
        <title>{editTitle ? `${editTitle}` : '23Forobi'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Page;
