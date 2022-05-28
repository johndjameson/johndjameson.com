import Head from 'next/head';

import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'styles/base.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta name="theme-color" content="#000" />
        <meta
          content="Senior Front-End Engineer in Austin, TX"
          name="description"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
