import { createGlobalStyle } from 'styled-components'
import { rem } from 'polished'
import argentThinItalic from 'assets/fonts/argent-thin-italic.woff2'
import hermesMaiaT3 from 'assets/fonts/hermes-maia-t3-regular.woff'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: block;
    font-family: 'argent-web';
    font-style: italic;
    font-weight: 200;
    src: url(${argentThinItalic}) format('woff2');
  }

  @font-face {
    font-display: block;
    font-family: 'hermes-maia-web';
    font-style: normal;
    font-weight: 300;
    src: url(${hermesMaiaT3}) format('woff');
  }

  // ----- Inline Content ----- //

  html {
    --font-display: 'argent-web', serif;
    --font-monospace: 'fira-mono-web', 'Monaco', monospace;
    --font-sans-serif: 'hermes-maia-web', system-ui, -apple-system, sans-serif;
    --font-small-caps: 'Hermes Maia C4', system-ui, -apple-system, sans-serif;
    --heading-color: #292525;
    --text-color: #080505;
    --transition-duration: 0.2s;
    --transition-function: ease-in-out;
    --transition: var(--transition-duration) var(--transition-function);
    cursor: initial; // Sanitize
  }

  * {
    margin: 0;
  }

  body {
    color: var(--text-color);
    font-family: var(--font-sans-serif);
    font-size: ${rem(18)};
    font-weight: 300;
    margin: 0;
    padding: 0;
  }

  // ----- Inline Content ----- //

  a {
    color: inherit;
    text-decoration: inherit;
  }

  code, pre {
    font-family: var(--font-monospace);
  }

  img {
    max-width: 100%;
  }

  b, strong {
    font-weight: inherit;
  }

  // ----- Block Content ----- //

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    margin: 0;
  }

  ol, ul {
    list-style-type: none;
    padding: 0;
  }
`

export default GlobalStyle
