import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
