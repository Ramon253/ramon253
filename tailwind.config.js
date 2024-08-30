const { addDynamicIconSelectors } = require('@iconify/tailwind')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        startBr: '1120px'
      },
      colors : {
        mainGrey : '#2F2F2F',
        main : '#222321',
        secondary : '#709E64',
        mainWhite: '#CBCBCB',
        secondaryWhite: '#D3E0D0',
      },
      fontFamily: {
        'nunito' : ['Nunito'],
      },
      boxShadow : {
        'main-shadow' : 'rgb(38, 57, 77) 0px 20px 30px -10px',
      }
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
}

