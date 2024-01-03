import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'vintage': "url('/vintage.jpg')"
      },
      fontFamily: {
        goudy: ['"Goudy Bookletter 1911"', 'sans-serif'],
      },
      colors: {
        custom: {
          purple: '#20161f',
          gold: '#c59f60',
          blue: '#4f7ebf',
        }
      }
    },
  },

  plugins: [],
}
export default config
