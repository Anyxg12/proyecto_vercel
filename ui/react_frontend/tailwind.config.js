/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        cyanNeon: "#00f3ff",
        purpleNeon: "#c084fc",
        emeraldNeon: "#4ade80",
        voidBg: "#030712",
        cardGlass: "rgba(15, 23, 42, 0.85)",
        cardBorder: "rgba(0, 243, 255, 0.35)"
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 25px rgba(0, 243, 255, 0.3)' },
          '50%': { boxShadow: '0 0 45px rgba(192, 132, 252, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
