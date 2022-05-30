import Button from 'components/Button/Button';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Link from 'next/link';
import VisuallyHidden from 'components/VisuallyHidden/VisuallyHidden';
import {
  ThemeModeContext,
  initialThemeState,
  themeStateReducer,
} from 'styles/theme-mode';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'styles/theme';
import { useCallback, useEffect, useReducer } from 'react';

import 'sanitize.css';
import 'styles/base.css';

function App({ Component, pageProps }) {
  const [themeState, dispatchThemeStateAction] = useReducer(
    themeStateReducer,
    initialThemeState
  );

  useEffect(() => {
    document.documentElement.dataset.theme = themeState.mode;
  }, [themeState]);

  const toggleThemeMode = useCallback(() => {
    dispatchThemeStateAction({ type: 'toggle' });
  }, []);

  return (
    <>
      <Head>
        <meta
          content="Senior Front-End Engineer in Austin, TX"
          name="description"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <ThemeModeContext.Provider value={themeState}>
          <Header>
            <Header.Item as="nav" full>
              <Link href="/" passHref>
                <a>
                  <VisuallyHidden>Home</VisuallyHidden>
                  <svg
                    height="50"
                    viewBox="0 0 80 80"
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0v80h80V0H0zm26.237 62.806c.746 0 1.392-.054 1.939-.162.547-.108.99-.29 1.33-.547.34-.257.609-.518.808-.783.199-.265.344-.646.435-1.143.091-.497.145-.932.162-1.305a38 38 0 0 0 .025-1.603h-4.698v-9.098h12.678c.398 2.569.597 4.864.597 6.886 0 4.607-1.077 7.984-3.232 10.13-2.154 2.146-5.502 3.219-10.043 3.219v-5.593zm16.58 0c.746 0 1.392-.054 1.939-.162.547-.108.99-.29 1.33-.547.34-.257.609-.518.808-.783.199-.265.344-.646.435-1.143.091-.497.145-.932.162-1.305a38 38 0 0 0 .025-1.603h-4.698v-9.098h12.678c.398 2.569.597 4.864.597 6.886 0 4.607-1.077 7.984-3.232 10.13-2.154 2.146-5.502 3.219-10.043 3.219v-5.593z"
                      fill={themeState.isLight ? '#000' : '#aca2bb'}
                    />
                  </svg>
                </a>
              </Link>
            </Header.Item>
            <Header.Item>
              <Button
                aria-label="Dark theme"
                aria-pressed={themeState.isDark}
                onClick={toggleThemeMode}
              >
                {themeState.isDark ? (
                  <svg
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 0C2.5.9 0 4.1 0 7.9 0 12.4 3.6 16 8.1 16c3.8 0 6.9-2.5 7.9-6C9.9 11.7 4.3 6.1 6 0z" />
                  </svg>
                ) : (
                  <svg
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.414-1.414zM14 7h2v2h-2zM12.95 14.433l-1.415-1.414 1.414-1.414 1.415 1.413zM7 14h2v2H7zM2.98 14.363 1.566 12.95l1.415-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.707 4.465 3.12 3.05 4.535 1.636 3.121z" />
                    <path d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
                  </svg>
                )}
              </Button>
            </Header.Item>
          </Header>

          <main>
            <Component {...pageProps} />
          </main>
        </ThemeModeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
