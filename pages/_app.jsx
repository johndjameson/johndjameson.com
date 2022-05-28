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

        <link
          href="/favicon.ico"
          rel="icon"
          sizes="any"
        />
        <link
          href="/favicon.svg"
          rel="icon"
          type="image/svg+xml"
        />
        <link
          href="/favicon_180x180.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
