import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        _black: "#151515",
        _darkgray: "#242424",
        _gray: "#D9D9D9",
        _green: "#4EE1A0",
        _error: "#FF6F5B",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
      },
      fontSize: {
        "_heading-xl": "88px",
        "_heading-lg": "48px",
        "_heading-md": "24px",
      },
      lineHeight: {
        "_heading-xl": "88px",
        "_heading-lg": "56px",
        "_heading-md": "32px",
      },
      letterSpacing: {
        "_heading-xl": "-2.5px",
        "_heading-lg": "-1.5px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
