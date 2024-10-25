/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "bg-light": "url('/assets/bg-light.png')",
        "bg-dark": "url('/assets/bg-dark.png')",
      },
      backgroundSize: {
        "200%": "200%",
      },
    },
  },
  plugins: [],
};
