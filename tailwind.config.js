/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/bg1.png')",
      },
    },
  },
  plugins: [],
  content: [
    './app/**/*.{html,js}',
    './app/*.{html,js}',
    './app/pages/**/*.{html,js}',
    './app/components/**/*.{html,js}',
  ],
}

