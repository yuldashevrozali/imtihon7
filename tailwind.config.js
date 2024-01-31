import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '100': '100px',
        '35':'20px',
        '50':'50'
      },
      padding: {
        '100': '100px', 
      },
      
    },
  },
  plugins: [daisyui],
}
