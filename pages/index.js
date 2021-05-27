import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Headline from '../components/Headline'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdullah Raja</title>
        <meta name="description" content="Software engineer based in Vancouver, British Columbia, Canada." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <main class="px-16 max-w-6xl m-auto">
        <Navbar />
        <Headline />
      </main>
    </>
  )
}
