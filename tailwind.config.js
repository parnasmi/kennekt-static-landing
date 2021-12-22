module.exports = {
	purge: ["./src/_includes/**/*.njk", "./src/**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#00A09D",
					lighter: "#00D0BD",
				},
				kdark: {
					DEFAULT: "#181818",
					black: "#18191F",
					darkGrey: "#4F4F4F",
				},
				grey: {
					DEFAULT: "#A5A7B2",
					light: "#E2E4E8",
					"light-2": "#a6a6a6",
					dark: "#7C8087",
					ddd: "#DDDDDD",
					f5f5f5: "#f5f5f5",
				},
				brown: {
					light: "#F8E1D1",
				},
			},
			fontFamily: {
				inter: "Inter, sans-serif",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
