/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages//*.{js,ts,jsx,tsx}',
    './components//*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
        primary: '#1a202c', // Example custom color
        secondary: '#2d3748',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // This plugin is used for styling forms
  ],
  darkMode: 'class', // Enables dark mode, triggered by the 'dark' class
};
