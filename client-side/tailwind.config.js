/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				'poste': ['poste', 'sans-serif']
			},
      colors: {
        bleu: '#1f589c',
        jaune: '#f4c922',
        gris: '#eee'
  
      },
		}
  },
  plugins: [],
}
