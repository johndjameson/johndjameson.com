import Container from 'components/Container/Container';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Link from 'next/link';

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

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link
          href="/favicon_180x180.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
      </Head>

      <Header>
        <Header.Item as="nav" full>
          <Link href="/" passHref>
            <a>
              <span className="visually-hidden">Home</span>
              <img
                alt=""
                height={50}
                src="/images/logo-johndjameson.svg"
                width={50}
              />
            </a>
          </Link>
        </Header.Item>
      </Header>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
