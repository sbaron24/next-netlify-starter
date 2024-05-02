import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import updog from '../public/updog.jpeg'
import Navigation from '@components/Navigation'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>seanbaron</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />

        <div className="pageSection">
          <Image
            src={updog}
            alt="Picture of the me!"
            width={400}
          />
          <div className="contentSection">
            <div>
              <Header title="Hi, I'm Sean" />
              <p className="description">
                I’m a yoga and meditation instructor based in Brooklyn, NY. I teach primarily based on my own Ashtanga yoga and Vipassana meditation practices.
              </p>
              <p>
                Check out my weekly classes here — anyone and everyone are welcome.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
