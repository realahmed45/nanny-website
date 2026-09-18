/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Silver, not blue: the page is white with silver bubbles, so the
        // palette is built from neutral greys with one soft blue to warm it.
        silver: {
          50:  '#FAFBFC',
          100: '#F3F5F8',
          200: '#E6EAEF',
          300: '#D2D9E2',
          400: '#B7C3D2',
          500: '#9AA9BC',
          600: '#7C8CA2',
          700: '#5B6B80',
        },
        brand: {
          blue: '#5B93D6',
          deep: '#3D7FC4',
          dark: '#2C5F97',
          sky:  '#EEF3FA',
          mist: '#F5F7FA',
        },
        accent: '#5B93D6',
        ink: '#1F2733',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
      keyframes: {
        // Bubbles drift upward and fade, so the background has life without
        // asking for attention.
        rise: {
          '0%':   { transform: 'translateY(0) scale(1)', opacity: '0' },
          '10%':  { opacity: '0.30' },
          '90%':  { opacity: '0.18' },
          '100%': { transform: 'translateY(-120vh) scale(1.15)', opacity: '0' },
        },
      },
      animation: {
        rise: 'rise linear infinite',
      },
    },
  },
  plugins: [],
}
