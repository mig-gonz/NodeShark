/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: ["light"],
	},
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			gridTemplateRows: {
				"[auto,auto,1fr]": "auto auto 1fr",
			},
		},
	},
	plugins: [
		// ...
		require("@tailwindcss/aspect-ratio"),
		require("daisyui"),
	],
};
