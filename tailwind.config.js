/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        keyframes: {
          // Wave-like animation for the first div
          'wave-1': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-6px)' },  // Moves up by 30px
          },
          // Wave-like animation for the second div
          'wave-2': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-4px)' },  // Moves up by 40px
          },
          // Wave-like animation for the third div
          'wave-3': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-2px)' },  // Moves up by 50px
          },
        },
        animation: {
          'wave-1': 'wave-1 1.5s ease-in-out infinite',  // First div animation
          'wave-2': 'wave-2 1.75s ease-in-out infinite', // Second div animation
          'wave-3': 'wave-3 2s ease-in-out infinite',    // Third div animation
        },
      },
    },
  plugins: [],
}

