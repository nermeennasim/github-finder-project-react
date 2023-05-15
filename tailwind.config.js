/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,css,jsx,tsx,ts}", (this.darkMode = true)],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
