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
        luxocean: '#1E3A5F',
        luxsand: '#C9A66B',
        luxforest: '#2C5E4C',
        luxpearl: '#F5F3EF',
        luxcedar: '#1A1A1A',
        luxice: '#6B6B6B',
        luxcopper: '#E0D6C8',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};

export default config;