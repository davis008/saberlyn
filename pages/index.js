import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Slider from "../components/Slider"
import List from '../components/List'
import Heading from '../components/Heading'


export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Saberlyn Company Limited</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
         <Heading/>
        <Slider/>
        <List/>
      </div>
        
  
    </Layout>
  )
}
