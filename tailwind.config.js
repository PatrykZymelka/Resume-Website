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
        'background': 'rgb(0, 0, 0)',
        'primary': 'rgb(1, 81, 198)',
        'secondary': 'rgb(0, 59, 109)',
        'accent': 'rgb(0, 123, 192)',
     },},
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

