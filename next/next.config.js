/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
		],
	},
	headers: async () => [
		{
			source: '/:path*',
			headers: [
				{ key: 'Access-Control-Allow-Origin', value: 'https://cdn.sanity.io' },
			],
		},
	],
	// logging: {
	// 	fetches: {
	// 		fullUrl: true,
	// 	},
	// },
}

module.exports = nextConfig
