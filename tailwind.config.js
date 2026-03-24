/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAF7F2',
        surface: '#FFFFFF',
        'text-primary': '#2C2825',
        'text-secondary': '#8A7E74',
        accent: '#C47D5A',
        'accent-light': '#F5EDE6',
        'accent-hover': '#A8654A',
        blush: '#D4A59A',
        'blush-light': '#F8EDEB',
        sage: '#7B9E87',
        'sage-light': '#EDF3EF',
        divider: '#E8E2DA',
        'footer-bg': '#2C2825',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Libre Franklin', 'sans-serif'],
      },
      maxWidth: {
        content: '1140px',
      },
      boxShadow: {
        card: '0 8px 32px rgba(44,40,37,0.06)',
        'card-hover': '0 16px 48px rgba(44,40,37,0.12)',
        soft: '0 4px 20px rgba(44,40,37,0.04)',
      },
      letterSpacing: {
        elegant: '0.18em',
      },
    },
  },
  plugins: [],
};
