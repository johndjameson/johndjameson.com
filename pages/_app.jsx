import Head from 'next/head';
import Header from 'components/Header/Header';
import Link from 'next/link';
import VisuallyHidden from 'components/VisuallyHidden/VisuallyHidden';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'styles/theme';

import 'sanitize.css';
import 'styles/base.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          content="Senior Front-End Engineer in Austin, TX"
          name="description"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <Header>
          <Header.Item as="nav" full>
            <Link href="/" passHref>
              <a>
                <VisuallyHidden>Home</VisuallyHidden>
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
      </ThemeProvider>
    </>
  );
}

export default App;
