import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/{app,ui}/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				canvas: '#fffff6',
				ink: '#000',
				hamilton: '#36a0a6',
			},
			fontFamily: {
				serif: ['Young Serif', 'Zen Antique', 'serif'],
			},
			minHeight: {
				fold: 'calc(100svh - var(--header-height))',
			},
		},
	},
	safelist: [{ pattern: /action-*/ }],
}
export default config
