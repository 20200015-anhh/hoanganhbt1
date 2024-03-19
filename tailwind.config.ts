import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize:{
        "2xs" : ['10px','12px']
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "wiggle" : {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(.85)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wiggle": 'wiggle 1.5s ease-in-out infinite'
      },
      colors: {
        advertisement: {
          button: '#9D3132',
          bg: '#FFCBD8',
          subbg: '#B22830',
          text: `#5F3124`,
        },
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config