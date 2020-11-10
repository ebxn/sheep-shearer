const dT = require('tailwindcss/defaultTheme')

module.exports = {
  future: 'all',
  experimental: {
    uniformColorPalette: true,
    extendedSpacingScale: true,
    darkModeVariant: true
  },
  dark: 'class',
  purge: {
    // enabled: true,
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
        cursive: ['Oxanium', 'cursive']
      },
      transitionDuration: {
        50: '50ms'
      },
      scale: {
        102: '1.02'
      },
      spacing: {
        18: '4.5rem'
      }
    },
    screens: {
      sm: '640px',
      md: '900px',
      lg: '1280px',
      xl: '1680px'
    }
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active']
  }
}
