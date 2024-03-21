import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        default: {
          50: "rgb(var(--default-color-50) / <alpha-value>)",
          100: "rgb(var(--default-color-100) / <alpha-value>)",
          200: "rgb(var(--default-color-200) / <alpha-value>)",
          300: "rgb(var(--default-color-300) / <alpha-value>)",
          400: "rgb(var(--default-color-400) / <alpha-value>)",
          500: "rgb(var(--default-color-500) / <alpha-value>)",
          600: "rgb(var(--default-color-600) / <alpha-value>)",
          700: "rgb(var(--default-color-700) / <alpha-value>)",
          800: "rgb(var(--default-color-800) / <alpha-value>)",
          900: "rgb(var(--default-color-900) / <alpha-value>)",
          950: "rgb(var(--default-color-950) / <alpha-value>)",
        },
      },
    },
    fontFamily: {
      sans: ["ping-ar", "sans-serif"],
    },
  },
  plugins: [typography],
};
