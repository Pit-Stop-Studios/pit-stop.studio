import { BASE_URL } from './env'
import type { Metadata } from 'next'

export default async function processMetadata({
	metadata,
	noIndex,
}: Sanity.Page | Sanity.BlogPost): Promise<Metadata> {
	const { title, description, slug, ogimage } = metadata

	return {
		metadataBase: new URL(BASE_URL),
		title,
		description,
		openGraph: {
			type: 'website',
			url: [slug.current === 'index' ? '/' : slug.current]
				.filter(Boolean)
				.join('/'),
			title,
			description,
			images: ogimage,
		},
		robots: {
			index: !noIndex,
		},
	}
}
