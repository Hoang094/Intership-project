import Head from 'next/head';
import React from 'react';
import Footers from './footers.jsx';
import Navbar from './navbar.jsx';

function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || 'Hotel Room Booking System'}</title>
        <meta name='description' content=' Hotel Room Booking System' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <main style={{ overflow: 'auto' }}>{children}</main>
      <Footers />
    </>
  );
}

export default MainLayout;
