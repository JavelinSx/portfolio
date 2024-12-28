/** @type {import('tailwindcss').Config} */
import tailwindcssMotion from "tailwindcss-motion";
export default {
  content: [
    './src/components/**/**.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssMotion],
}

