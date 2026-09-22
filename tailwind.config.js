/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled from the Figma export and the logo artwork rather than
        // estimated, so the build matches the design rather than resembling it.
        brand: {
          DEFAULT: '#FFD51E',   // the logo's own yellow
          ink: '#E3A81B',       // eyebrow text: darker, so it stays legible
        },
        cream: {
          DEFAULT: '#FFFDF0',   // hero background
          nav: '#FCF8DE',       // the rounded nav pill
          card: '#FFFCF5',      // the three "how it works" cards
        },
        ink: {
          DEFAULT: '#1A1A1A',
          soft: '#3D3D3D',
        },
        wa: '#25D366',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: { wrap: '1280px' },
    },
  },
  plugins: [],
}
