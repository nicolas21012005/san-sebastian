/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'imageOf' : "url(assets/images/21.jpg)",
        '2ndImage': "url(assets/images/19.jpg)"
      }
    },
    fontFamily: {
      serif: ['Rajdhani', 'serif'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


