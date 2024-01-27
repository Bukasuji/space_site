/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['var(--font-bellefair)'],
        barlow:['var(--font-barlow_condensed)'],
        'barlow-condensed': ['var(--font-barlow_condensed)'],

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          desktop: "url('/assets/home/background-home-desktop.jpg')", 
          mobile: "url('/assets/home/background-home-mobile.jpg')", 
          tablet: "url('/assets/home/background-home-tablet.jpg')",
          "destination-desktop": "url('/assets/destination/background-destination-desktop.jpg)",
          "destination-tablet": "url('/assets/destination/background-destination-tablet.jpg)",
          destination:"url('.ass')"
      },
    },
  },
  plugins: [],
}
