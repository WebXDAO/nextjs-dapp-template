import Navbar from '../navigation/Navbar'
import Footer from '../navigation/Footer'
import Head from 'next/head'

export default function GlobalLayout({ children, session }) {
  return (
    <>
      <Head>
        <title>Nextjs-Dapp-Template | WebXDAO</title>
        <meta
          name="description"
          content="Nextjs Dapp Hackaton Starter | WebXDAO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen flex-col">
        <Navbar></Navbar>
        <div className="flex flex-1 md:flex-col">
          <main className="flex-1">{children}</main>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}
