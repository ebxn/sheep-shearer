const dT = require('tailwindcss/defaultTheme')

module.exports = {
  future: 'all',
  experimental: 'all',
  dark: 'class',
  purge: {
    content: [
      'public/index.html',
      'src/**/*.vue'
    ],
    options: {
      keyframes: true
    }
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...dT.fontFamily.sans],
        handwrite: ['Comic Neue', 'cursive']
      }
    }
  }
}
