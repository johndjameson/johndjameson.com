import { createGlobalStyle } from 'styled-components'
import { rem } from 'polished'

const GlobalStyle = createGlobalStyle`
  html {
    --heading-color: #292525;
    --text-color: #080505;
    --text-heading: 'Argent CF', serif;
    --text-monospace: 'Fira Mono', 'Monaco', monospace;
    --text-sans-serif: system-ui, -apple-system, sans-serif;
    --text-serif: 'Valkyrie T4', serif;
    cursor: initial; // Sanitize
  }

  * {
    margin: 0;
  }

  body {
    color: var(--text-color);
    font-family: var(--text-serif);
    font-size: ${rem(17)};
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  code, pre {
    font-family: var(--text-monospace);
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyle
