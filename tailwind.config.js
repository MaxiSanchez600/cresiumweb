/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'NeueHaasDisplayBlack': ['NeueHaasDisplayBlack'],
      'NeueHaasDisplayBold': ['NeueHaasDisplayBold'],
      'NeueHaasDisplayThin': ['NeueHaasDisplayThin'],
      'NeueHaasDisplayMediu': ['NeueHaasDisplayMediu'],
      
    },
    extend: {
      screens:{
        '2xl':'1900px'
        }

    },
  },
  plugins: [],
}