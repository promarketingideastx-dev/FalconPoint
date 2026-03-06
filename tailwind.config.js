/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#10B981",
        "background-light": "#ffffff",
        "background-dark": "#0f172a",
        emerald: {
          500: '#10B981',
          DEFAULT: '#10B981'
        },
        slate: {
          900: '#0F172A',
          DEFAULT: '#0F172A'
        }
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}
