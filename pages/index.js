import { Fragment } from 'react';
import Head from 'next/head';

function HomePage() {
  return (
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>

      <h1>The Home Page</h1>
    </Fragment>
  );
}

export default HomePage;

