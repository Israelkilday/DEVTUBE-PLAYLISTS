/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        shine: "shine 3s linear infinite",
      },
      keyframes: {
        shine: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
};
