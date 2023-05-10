import React, { useEffect,useState } from 'react';
import { Layout } from '../components';
import '../styles/globals.scss'

import { Montserrat } from 'next/font/google';
 
const montserrat = Montserrat({
  weight: '800',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
<Component {...pageProps} />

    </Layout>
    
  )
  
  
}
