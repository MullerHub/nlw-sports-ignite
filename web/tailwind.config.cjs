/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient':
          'linear-gradient(38deg, rgba(0,43,255,1) 0%, rgba(8,0,255,1) 7%, rgba(236,255,0,1) 39%, rgba(11,237,14,1) 100%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 69%)'
      }
    }
  },
  plugins: []
}
