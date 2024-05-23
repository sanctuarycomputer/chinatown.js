import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Arial Narrow', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        "ctjs-yellow": '#FFE500',
        "ctjs-red": '#FC4732',
        "ctjs-blue": '#C5E6FC',
        "ctjs-pink": '#FF9FC2',
        "ctjs-green": "#5CCBB6"
      }
    }
  },
  plugins: [],
};
export default config;
