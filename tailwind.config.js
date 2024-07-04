/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [tailwindScrollbar],
};
