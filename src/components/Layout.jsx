import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children, nav = false}) => {
  return (
    <>
        <Head>
            <title>Pobl | Customer Portal</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {nav && <Navbar />}

        <main>
            {children}
        </main>

        <Footer />
    </>
  )
}

export default Layout
