/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f0f10', // Rich near-black
        paper: '#fdfcfb', // Warm luxury cream background
        cloud: '#e5e2db', // Soft warm-grey border
        // Luxury Gold and Bronze color system
        green: {
          DEFAULT: '#c7982c', // Golden Amber
          light: '#dfb046', // Light Gold
          deep: '#8f6a1c', // Deep Bronze Gold
          glow: '#fdf7eb', // Warm Ivory Gold glow
        },
        status: '#16c46a', // the live "available now" dot stays green
        muted: '#6e6d6b', // Muted warm gray
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      borderRadius: {
        pill: '100px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
