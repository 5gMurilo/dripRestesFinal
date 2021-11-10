module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '85': '85%',
        '100': '25.75rem',
        'maxC':'max-content'
      },
      colors: {
        'cultured': '#fbfbfb',
        'dCultured': '#f5f5f5',
        'maximumBlue':'#48BCBD',
        'myrtleGreen': '#317A7B',
        'richDBlue': '#193839',
        'eireBlack': '#141414',
        'black': '#000000',
        'quickSilver': '#A3A3A3',
        'red600': '#DC2626',
        'cat1': '#0FA3B1',
        'cat2': '#D9E5D6',
        'cat3': '#C5E99B',
        'cat4': '#FF5964',
        'price': '#286C17',
        'lightGray': '#D5D5D5',
        'grey1': '#3A3A3A',
        'grey2': '#5c5c5c'
      },
      margin: {
        'FleftTright': '80%',
        'FleftTright2': '70%',
        'FleftTright3': '20%'
      },
      width: {
        'halfScreen': '60vw',
        '40v': '40vw'
      },
      boxShadow: {
        green: '0 10px 15px -3px rgba(25, 56, 57, 0.3), 0 10px 10px -3px rgba(25, 56, 57, 0.05)',
        white: '0 10px 15px -3px rgba(255, 255, 255, .2), 0 10px 10px -3px rgba(25, 56, 57, 0.05)',

      }
    }, 
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus']
    },
  },
  plugins: [],
}
