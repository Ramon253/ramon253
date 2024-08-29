const { addDynamicIconSelectors } = require('@iconify/tailwind')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
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
        'main-shadow' : 'rgba(240,46,170,0.4) 5px 5px, rgba(240,46,170,0.3) 10px 10px, rgba(240,46,170,0.2) 15px 15px, rgba(240,46,170,0.1) 20px 20px, rgba(240,46,170,0.05) 25px 25px',
      }
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
}

