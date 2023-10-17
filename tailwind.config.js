const plugin = require('tailwindcss/plugin');

export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'rgb(255, 255, 255)',
        'background': 'rgb(10, 9, 9)',
        'primary': 'rgb(1, 81, 198)',
        'secondary': 'rgb(16, 16, 16)',
        'accent': 'rgb(0, 123, 192)',
       },
       fontSize: {
        'body-lg': '1rem',
        'body': '.5rem',
      }},
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
    const newUtilities = {
      '.horizontal-tb': {
        writingMode: 'horizontal-tb',
      },
      '.vertical-rl': {
        writingMode: 'vertical-rl'
      },
      '.vertical-lr': {
        writingMode: 'vertical-lr'
      }
    }
    addUtilities(newUtilities)
  })],
}

