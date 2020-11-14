module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      height:{
        70: '600px',
        slide: '460px',
      },
      backgroundColor: theme =>  ({
        upshootOrange: 'linear-gradient(265.51deg, #F27137 0%, #F26037 100%)'
      }),
      fontFamily: {
        primary: 'Source Sans Pro, sans-serif'
      },
      textColor: {
        blue: '#172363'
      },
      width:{
        20: '20%',
      },
      boxShadow: {
        'icon': '0px 11px 15px -10px rgba(49, 49, 86, 0.3)',
      }
    },
  },
  variants: {},
  plugins: [],
}
