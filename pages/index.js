import Head from 'next/head';

import styles from './index.module.scss';

function Home() {
  return (
    <>
      <Head>
        <title>Helen Cho</title>
        <meta name="description" content="Helen Cho, a software engineer." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className={styles.name}>
        <span>Hae Young</span> <span>Helen</span> <span>Cho</span>
      </h1>
    </>
  );
}

export default Home;
