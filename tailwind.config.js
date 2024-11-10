/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        luxocean: '#1E3A5F',
        luxsand: '#C9A66B',
        luxforest: '#2C5E4C',
        luxpearl: '#F5F3EF',
        luxcedar: '#1A1A1A',
        luxice: '#6B6B6B',
        luxcopper: '#E0D6C8',
        'lux-gold': 'var(--lux-gold)',
        'lux-navy': 'var(--lux-navy)',
        'lux-ivory': 'var(--lux-ivory)',
        'lux-charcoal': 'var(--lux-charcoal)',
        'lux-olive': 'var(--lux-olive)',
      },
      zIndex: {
        'navigation': '50',
        'modal-backdrop': '100',
        'modal': '110',
        'drawer-backdrop': '120',
        'drawer': '130',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
} 