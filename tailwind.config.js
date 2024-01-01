export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'desktop': {max: '1200px'},
      'mobile': {max: '650px'},
      'xs-mobile': {max: '450px'}
    },
    extend: {
      fontFamily: {
        grotesk: 'Grotesk'
      },
      colors: {
        custom1: 'hsl(270, 3%, 87%)',
        custom2: 'hsl(279, 6%, 55%)',
        custom3: 'hsl(278, 68%, 11%)',
        custom4: 'hsl(0, 100%, 66%)',
        gradiant: 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)'
      }
    },
  },
  plugins: [],
}