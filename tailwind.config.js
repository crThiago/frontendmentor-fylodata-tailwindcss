module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'display': 'Raleway',
      'body': 'Raleway'
    },
    fontWeight: {
      normal: 400,
      extrabold: 800
    },
    borderRadius: {
      default: '10px',
      'sm': '5px',
      'lg': '100px'
    },
    screens: {
      sm: '640px',
      // md: '768px',
      // lg: '1024px',
      xl: '916px',
    },
    container: {
      center: true
    },
    colors: {
      white: '#ffffff',
      lightred: '#ffa399',
      lightpink: '#ff4d97',
      paleblue: '#dddbff',
      grayishblue: '#848794',
      darkblue: '#1d2c67',
      verydarkblue: '#0c122c',
    },
    gradients: theme => ({
      'blue-green': [theme('colors.lightred'), theme('colors.lightpink')],
    }),
    extend: {},
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  plugins: [
    require('./plugins/gradients')
  ],
}
