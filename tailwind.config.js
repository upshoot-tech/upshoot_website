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
      backgroundColor: {
        'upshoot-gray': '#F2F2F2',
        'upshoot-light-orange': 'rgba(248, 181, 139, 0.5)',
        'upshoot-blue': '#030F4F',
      },
      gradientColorStops: {
        'upshoot-gray': '#F2F2F2',
        'upshoot-light-orange': 'rgba(248, 181, 139, 0.5)',
        'upshoot-dark-orange': 'rgba(255, 163, 105, 0.5)',
        'upshoot-light-skyblue': 'rgba(173, 185, 249, 0.6)',
        'upshoot-darker-skyblue': 'rgba(93, 105, 169, 0.6)',
        'upshoot-dark-blue': 'rgba(53, 53, 90, 0.6)',
        'upshoot-light-blue': 'rgba(113, 113, 150, 0.6)',
        'upshoot-lighter-blue': 'rgba(60, 60, 81, 0.6)',
        'upshoot-button': ''
      },
      fontFamily: {
        primary: 'Source Sans Pro, sans-serif'
      },
      textColor: {
        blue: '#172363',
        deepBlue: '#35355A'
      },
      width:{
        20: '20%',
      },
      boxShadow: {
        'icon': '0px 26px 30px -15px rgba(88, 88, 125, 0.2)',
        orange: '0px 24px 38px rgba(242, 113, 55, 0.14), 0px 9px 46px rgba(242, 113, 55, 0.12), 0px 11px 25px -20px rgba(242, 113, 55, 0.3)',
        
      },
      borderWidth: {
        'half': '0.5px',
      },
      borderRadius: {
        'eight': '8px',
      },
    },
  },
  variants: {},
  plugins: [],
}
