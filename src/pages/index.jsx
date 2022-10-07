import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/home.module.scss';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Home | Ukrainian-IT.Family</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/static/images/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <footer>asd</footer>
  </div>
);

export default Home;
