/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#A694FF',
          dark: '#0E0E0E',
          light: '#FFFFFF',
        },
        secondary: {
          green: '#B3D73B',
          gray: '#292929',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #A694FF, #B3D73B)',
      },
    },
  },
  plugins: [],
};