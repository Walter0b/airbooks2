/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': {
          550: '#438eb9',
          650:'#266cad',
          1000: 'rgba(255,255,255,.1)'
        },
        'zinc': {
          550:'#585858'
        },
        
      },
    },
  },
  plugins: [],
}
