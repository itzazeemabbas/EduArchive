/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // blue-600
          light: '#3B82F6',   // blue-500
          dark: '#1E40AF',    // blue-800
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        xl2: '1rem'
      }
    },
  },
  plugins: [],
}
