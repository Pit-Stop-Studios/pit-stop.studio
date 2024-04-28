import { getSite } from '@/lib/sanity'
import type { MetadataRoute } from 'next'

export default async function manifeset(): Promise<MetadataRoute.Manifest> {
	const { title, description } = await getSite()

	return {
		name: title,
		description,
		start_url: '/',
		display: 'browser',
		background_color: '#fffff6',
		theme_color: '#000',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	}
}
