import { createGlobalStyle } from 'styled-components'
import { rem } from 'polished'

const GlobalStyle = createGlobalStyle`
  html {
    --font-display: 'Argent CF', serif;
    --font-monospace: 'Fira Mono', 'Monaco', monospace;
    --font-sans-serif: 'Hermes Maia T4', system-ui, -apple-system, sans-serif;
    --font-serif: 'Valkyrie T4', serif;
    --font-small-caps: 'Hermes Maia C4', system-ui, -apple-system, sans-serif;
    --heading-color: #292525;
    --text-color: #080505;
    cursor: initial; // Sanitize
  }

  * {
    margin: 0;
  }

  body {
    color: var(--text-color);
    font-family: var(--font-serif);
    font-size: ${rem(18)};
    font-weight: 400;
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
