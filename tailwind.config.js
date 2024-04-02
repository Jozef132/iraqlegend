/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      mb: "300px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        background: {
          100: "#d2d2d4",
          200: "#a5a6a9",
          300: "#79797f",
          400: "#4c4d54",
          500: "#1f2029",
          600: "#191a21",
          700: "#131319",
          800: "#0c0d10",
          900: "#060608",
        },
      },
      fontFamily: {
        amiri: ["var(--font-amiri)"],
      },
      backgroundImage: {
        admin: "url('../public/admin.gif')",
        police: "url('../public/police.gif')",
        army: "url('../public/army.gif')",
        mod: "url('../public/mod.gif')",
        cia: "url('../public/cia.gif')",
        health: "url('../public/health.gif')",
        scenarios: "url('../public/scenarios.gif')",
        gangs: "url('../public/gangs.gif')",
        heros: "url('../public/heros.gif')",
        city: "url('../public/city.jfif')",
        prime: "url('../public/prime.gif')",
        verifed: "url('../public/verifed.gif')",
        discord: "url('../public/discord.gif')",
        market: "url('../public/market.gif')",
        location: "url('../public/location.gif')",
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("tailwind-scrollbar"), require("daisyui")],
};
