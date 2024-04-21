import { BASE_URL } from './env'
import processUrl from './processUrl'
import type { Metadata } from 'next'

export default async function processMetadata(
	page: Sanity.Page | Sanity.BlogPost | Sanity.Employee,
): Promise<Metadata> {
	const url = processUrl(page)
	const { title, description, ogimage, noIndex } = page.metadata

	return {
		metadataBase: new URL(BASE_URL),
		title,
		description,
		openGraph: {
			type: 'website',
			url,
			title,
			description,
			images: ogimage,
		},
		robots: {
			index: !noIndex,
		},
		alternates: {
			canonical: url,
			types: {
				'application/rss+xml': '/blog/rss.xml',
			},
		},
	}
}
