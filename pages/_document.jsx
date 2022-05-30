import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// Determine and set active theme mode. Must be set using a blocking function to prevent FOUC:
// https://sreetamdas.com/blog/the-perfect-dark-mode
function setActiveThemeMode() {
  const storedThemeMode = window.localStorage.getItem('theme-mode');

  if (!['dark', 'light'].includes(storedThemeMode)) {
    document.documentElement.dataset.theme = 'light';
    return;
  }

  document.documentElement.dataset.theme = storedThemeMode;
}

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />

          <meta name="theme-color" content="#000" />

          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
          <link
            href="/favicon_180x180.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `${setActiveThemeMode.toString()}; setActiveThemeMode();`,
            }}
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}
