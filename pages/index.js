import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
  

  return (
    

    <div className={styles.container}>
      <Head>
        <title>The Credit Card Company</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Script src = "./generate"   />
        <h1 className={styles.title}>
          Welcome to The Credit Card Company!
        </h1>

        <p className={styles.description}>
          {' '}
          <code className={styles.code}>The card chooses the spender, remember...</code>
        </p>

        <div className={styles.grid}>

          <a className={styles.card}>
            <h2 id = "Name">Sherlock Holmes</h2>
            <h2 id = "ccNum">xxxx-xxxx-xxxx-xxxx</h2>
            <h3 id = "cvv">221</h3>
            <h3 id = "exp">11/25</h3>  
          </a>
        
        

        </div>
      </main>

      <footer className={styles.footer}>
        Powered by Bob.
      </footer>
    </div>
  )
}
