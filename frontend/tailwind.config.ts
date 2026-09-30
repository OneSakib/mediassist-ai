import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102A43",
        teal: {
          50: "#EFFCF6",
          100: "#D9FBEF",
          500: "#0F9D83",
          600: "#087F6B",
          700: "#056052"
        },
        mist: "#F5F9FB"
      },
      boxShadow: {
        soft: "0 10px 35px rgba(16,42,67,0.07)"
      }
    }
  },
  plugins: []
};
export default config;