import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '620px',
      'lg': '960px',
      'xl': '1200px',
    },
    extend: {
      colors: {
        light: '#F9FFFD',
        dark: '#141414',
      },
      transitionDuration: {
        DEFAULT: '400ms',
      },
    },
  },
  plugins: [],
}
export default config
