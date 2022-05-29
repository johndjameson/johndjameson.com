import { get as themeUiGet } from 'theme-ui';

export const theme = {
  breakpoints: [544, 768, 1012, 1280].map((bp) => `${bp}px`),
  colors: {
    bg: {
      default: 'var(--jdj-color-bg-default)',
    },
  },
  fonts: {
    body: 'var(--jdj-font-family-body)',
    code: 'var(--jdj-font-family-code)',
    display: 'var(--jdj-font-family-display)',
    heading: 'var(--jdj-font-family-heading)',
  },
  fontSizes: [
    'var(--jdj-font-size-000)',
    'var(--jdj-font-size-100)',
    'var(--jdj-font-size-200)',
    'var(--jdj-font-size-300)',
    'var(--jdj-font-size-400)',
    'var(--jdj-font-size-500)',
    'var(--jdj-font-size-600)',
    'var(--jdj-font-size-700)',
    'var(--jdj-font-size-800)',
  ],
  fontWeights: {
    light: 300,
    medium: 500,
    normal: 400,
    semibold: 600,
  },
  lineHeights: {
    body: 'var(--jdj-font-line-height-body)',
    display: 'var(--jdj-font-line-height-display)',
    heading: 'var(--jdj-font-line-height-heading)',
  },
  space: [
    'var(--jdj-space-000)',
    'var(--jdj-space-100)',
    'var(--jdj-space-200)',
    'var(--jdj-space-300)',
    'var(--jdj-space-400)',
    'var(--jdj-space-500)',
    'var(--jdj-space-600)',
    'var(--jdj-space-700)',
    'var(--jdj-space-800)',
    'var(--jdj-space-900)',
    'var(--jdj-space-1000)',
    'var(--jdj-space-1100)',
    'var(--jdj-space-1200)',
  ],
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

export const get = (path) => themeUiGet(theme, path);
