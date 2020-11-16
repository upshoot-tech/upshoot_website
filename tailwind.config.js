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
        'upshoot-gray': '#F2F2F2',
        'upshoot-light-orange': 'rgba(248, 181, 139, 0.5)',
      }),
      gradientColorStops: {
        'upshoot-gray': '#F2F2F2',
        'upshoot-light-orange': 'rgba(248, 181, 139, 0.5)',
        'upshoot-dark-orange': 'rgba(255, 163, 105, 0.5)',
      },
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
        orange: '0px 24px 38px rgba(242, 113, 55, 0.14), 0px 9px 46px rgba(242, 113, 55, 0.12), 0px 11px 25px -20px rgba(242, 113, 55, 0.3)',
      }
    },
  },
  variants: {},
  plugins: [],
}
