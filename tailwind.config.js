/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        'container-w': 'var(--layout-container-width-padding-x)',
        'container-w-narrow': 'var(--layout-container-width-narrow-padding-x)'
      },
      fontFamily: {
        'heading': 'var(--font-heading)',
        'sans': 'var(--font-sans)',
      }
    },
  },
  plugins: [],
}