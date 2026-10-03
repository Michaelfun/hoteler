/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#141414',
          dark: '#1a1817',
          alt: '#221f1b',
        },
        accent: {
          DEFAULT: '#b8895b',
          hover: '#cda275',
        },
        foreground: {
          DEFAULT: '#ffffff',
          muted: '#a8a29e',
        }
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
