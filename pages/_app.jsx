/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Header from 'components/Header/Header';
import Link from 'next/link';
import VisuallyHidden from 'components/VisuallyHidden/VisuallyHidden';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'theme-ui';
import { a11yProps } from 'helpers/commonProps';
import { theme } from 'styles/theme';

import 'sanitize.css';
import 'styles/base.css';

// Import theme logic component in the client because SSR can’t know the user’s preference:
// https://electricanimals.com/articles/next-js-dark-mode-toggle
const ThemeModeToggle = dynamic(
  () => import('components/ThemeModeToggle/ThemeModeToggle'),
  {
    ssr: false,
  }
);

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta
          content="Senior Front-End Engineer in Austin, TX"
          name="description"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <Header>
          <Header.Item as="nav" full>
            <Link href="/" passHref>
              <a sx={{ display: 'block', width: 'fit-content' }}>
                <VisuallyHidden>Home</VisuallyHidden>
                <svg
                  height="50"
                  viewBox="0 0 80 80"
                  width="50"
                  {...a11yProps.svg}
                >
                  <path
                    d="M0 0v80h80V0H0zm26.237 62.806c.746 0 1.392-.054 1.939-.162.547-.108.99-.29 1.33-.547.34-.257.609-.518.808-.783.199-.265.344-.646.435-1.143.091-.497.145-.932.162-1.305a38 38 0 0 0 .025-1.603h-4.698v-9.098h12.678c.398 2.569.597 4.864.597 6.886 0 4.607-1.077 7.984-3.232 10.13-2.154 2.146-5.502 3.219-10.043 3.219v-5.593zm16.58 0c.746 0 1.392-.054 1.939-.162.547-.108.99-.29 1.33-.547.34-.257.609-.518.808-.783.199-.265.344-.646.435-1.143.091-.497.145-.932.162-1.305a38 38 0 0 0 .025-1.603h-4.698v-9.098h12.678c.398 2.569.597 4.864.597 6.886 0 4.607-1.077 7.984-3.232 10.13-2.154 2.146-5.502 3.219-10.043 3.219v-5.593z"
                    fill="var(--jdj-color-header-logo-fill)"
                  />
                </svg>
              </a>
            </Link>
          </Header.Item>
          <Header.Item>
            <ThemeModeToggle />
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
