import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				foreground: 'hsl(var(--foreground))',
				backgroundgradient1: '#0F2845',
				backgroundgradient2: '#717297',
				background_page: '#44AF69',
				card1: '#F8333C',
				card2: '#FCAB10',
				card3: '#2B9EB3',
				boxshadow: '#DBD5B5',
				main: 'oklch(72.27% 0.1894 50.19)',
				'main-foreground': 'oklch(0% 0 0)',
				background: 'oklch(95.38% 0.0357 72.89)',
				border: 'oklch(0% 0 0)',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				borderRadius: {
					base: '5px',
				},
				fontWeight: {
					base: '500',
					heading: '700',
				},
				boxShadow: {
					shadow: '4px 4px 0px 0px oklch(0% 0 0)', // substitua pelo valor real do --shadow
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			screens: {
				smallHeight: { raw: '(max-height: 550px)' },
				w800: { max: '800px' },
				w700: { max: '700px' },
				w600: { max: '600px' },
				w500: { max: '500px' },
				w450: { max: '450px' },
				w400: { max: '400px' },
			},
		}
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("tailwindcss-animate")
	]
};
export default config;
