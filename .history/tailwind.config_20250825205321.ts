import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust based on your app structure
    './pages/**/*.{js,ts,jsx,tsx}', // Adjust based on your app structure
    './components/**/*.{js,ts,jsx,tsx}', // Adjust based on your app structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6347', // Example color customization
        secondary: '#4CAF50',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
        andrew: ['Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem', // Example of custom spacing
      },
      boxShadow: {
        'outline-primary': '0 0 0 3px rgba(255, 99, 71, 0.5)',
      },
    },
  },
  plugins: [
    // You can add any plugins here
  ],
};

export default config;
