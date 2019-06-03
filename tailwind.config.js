const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          default: '#2a5937',
          light: '#edf7ef'
        },
        secondary: {
          default: '#ff8800',
          light: '#fff6ec'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
