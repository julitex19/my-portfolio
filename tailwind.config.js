/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#DD143C',
        secondaryColor:'#111111',
      },

      width: {
        fiftypercet:'50%'
      },

      height: {
        
      },
      
      fontSize: {
        sixteenPx: '16px',
        twentyPx: '20px'
        
      },
      fontFamily: {
        primaryFont: 'Poppins',
        secondaryFont: 'Ubuntu'
      }

    },
  },
  plugins: [],
}
