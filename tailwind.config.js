/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#121415',
        'dark-brand': '#222426',
        'rich-black': '#121415',
        'hero-overlay': '#1B2124',
        'button-variant-blue': '#0074F0',
        'button-variant-red': '#F74746',
      },
      spacing: {
        4.5: '1.125rem', // 18px
        6.5: '1.625rem', // 26px
        8.125: '2.03125rem', // 32.5px
        15: '3.75rem', // 60px
        30: '7.5rem', // 120px
        8.1875: '2.0625rem', // 33px
        72: '18rem', // 288px
        120: '30rem', //480px
        42.75: '10.6875rem', //171px
        34: '8.5rem', // 136px
        37.5: '9.375rem', // 150px
        45.5: '11.375rem', // 182px
        47.5: '11.875rem', // 190px
      },
      maxWidth: {
        content: '85.375rem',
        video: '40.1875rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
