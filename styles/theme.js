import { get as themeUiGet } from 'theme-ui';

export const theme = {
  breakpoints: [544, 768, 1012, 1280].map((bp) => `${bp}px`),
  colors: {
    background: '#fff',
    primary: '#33e',
    text: '#000',
  },
  fonts: {
    body: 'var(--jdj-font-family-body)',
    code: 'var(--jdj-font-family-code)',
    heading: 'var(--jdj-font-family-heading)',
    mono: 'var(--jdj-font-family-mono)',
    sans: 'var(--jdj-font-family-sans)',
    serif: 'var(--jdj-font-family-serif)',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64],
  fontWeights: {
    light: 300,
    medium: 500,
    normal: 400,
    semibold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128],
  styles: {
    '*': {
      mb: 4,
    },
    a: {
      textDecorationLine: 'underline',
    },
    h2: {
      fontSize: 4,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 3,
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 2,
      fontWeight: 'bold',
    },
    code: {
      fontSize: 1,
    },
    pre: {
      fontSize: 1,
    },
  },
};

export const get = (path, toPx = true) => {
  const value = themeUiGet(theme, path);

  if (!toPx) {
    return value;
  }

  if (isNaN(value)) {
    throw new Error(`${value} is not a px value`);
  }

  return `${value}px`;
};
