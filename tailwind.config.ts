import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        luxocean: '#0A4B5E',
        luxsand: '#D9B88F',
        luxforest: '#1E4D40',
        luxpearl: '#F0F3F4',
        luxcedar: '#3A3229',
        luxice: '#FAFCFD',
        luxcopper: '#CB7D55',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};

export default config;