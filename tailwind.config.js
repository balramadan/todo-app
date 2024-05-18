/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light'],
  },
}

