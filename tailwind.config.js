/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
				'bg-light': '#F5F5F4',
        'bg-dark': '#0F1D2E',
        'brand-primary': '#1EC0AD',
        'brand-secondary': '#028785',
        'brand-tertiary': '#203B62',
			},
    },
  },
  variants: {
    extend: {
      colors: {
				'bg-light': '#F5F5F4',
        'bg-dark': '#0F1D2E',
        'brand-primary': '#1EC0AD',
        'brand-secondary': '#028785',
        'brand-tertiary': '#203B62',
			},
    },
  },
  plugins: [],
}


