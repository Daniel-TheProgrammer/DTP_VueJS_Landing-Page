module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'nunito' : ['Nunito', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .1s ease',
      transitions: {
        'slow': 'all 2s ease',
        'normal-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'slow-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
      variants: ['responsive', 'hover'],
    }),
  ],
}
