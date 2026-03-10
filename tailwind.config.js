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
        primary: {
          DEFAULT: '#0074F0',
          600: '#0069D9',
          800: '#0056B3',
        },
        'dark-brand': '#222426',
        'rich-black': '#121415',
        'hero-overlay': '#1B2124',
      },
      spacing: {
        2.5: '0.625rem', // 10px
        3.5: '0.875rem', // 14px
        4.5: '1.125rem', // 18px
        6.5: '1.625rem', // 26px
        8.125: '2.03125rem', // 32.5px
        8.1875: '2.0625rem', // 33px
        15: '3.75rem', // 60px
        30: '7.5rem', // 120px
        34: '8.5rem', // 136px
        37.5: '9.375rem', // 150px
        42.75: '10.6875rem', // 171px
        45.5: '11.375rem', // 182px
        47.5: '11.875rem', // 190px
        50: '12.5rem', // 200px
        72: '18rem', // 288px
        75: '18.75rem', // 300px
        120: '30rem', // 480px
        175: '43.75rem', // 700px
        197.5: '49.375rem', // 790px
      },
      maxWidth: {
        content: '85.375rem',
        video: '40.1875rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
