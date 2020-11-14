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
    },
  },
  variants: {},
  plugins: [],
}
