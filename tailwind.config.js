/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#047857",       // emerald-700
          hover: "#065f46",         // emerald-800
        },
        accent: {
          DEFAULT: "#f59e0b",       // amber-500
        },
        surface: {
          light: "#f5f5f4",         // stone-100
          dark: "#292524",          // stone-800
        },
        text: {
          DEFAULT: "#111827",       // gray-900
          subtle: "#78716c",        // stone-600
        }
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
};
