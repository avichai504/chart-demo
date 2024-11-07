// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Including all pages in src/app
    './src/component/**/*.{js,ts,jsx,tsx}', // Including all components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
