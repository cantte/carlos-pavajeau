import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from 'components/hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carlos Pavajeau</title>
        <meta name="description" content="This is my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </>
  )
}

export default Home
