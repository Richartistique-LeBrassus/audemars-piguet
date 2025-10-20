import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
        andrew: ['Andrew-ExtraLight', 'serif'],
      },
      screens: {
        //sm: '480px',  
        //md: '768px',  // Custom medium breakpoint
        lg: '1024px', // Custom large breakpoint
        xl: '1440px', // Custom extra-large breakpoint
        '2xl': '1600px', // Additional breakpoint
      },
    },
  },
  plugins: [
    // You can add any plugins here
  ],
};

export default config;