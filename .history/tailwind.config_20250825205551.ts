import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6347', 
        secondary: '#4CAF50',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
        andrew: ['Zain-ExtraLight', 'serif'],
      },
      spacing: {
        '128': '32rem',
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