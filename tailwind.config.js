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
        handwrite: ['Mirza', 'cursive']
      },
      transitionDuration: {
        50: '50ms'
      },
      scale: {
        102: '1.02'
      }
    }
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active']
  }
}
