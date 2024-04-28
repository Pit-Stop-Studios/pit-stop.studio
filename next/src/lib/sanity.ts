import { createClient, type QueryParams } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import dev from '@/lib/env'
import groq from 'groq'

export { default as groq } from 'groq'

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2024-04-01',
	useCdn: !dev,
})

export function fetchSanity<T = any>(
	query: string,
	{
		params = {},
		tags,
	}: {
		params?: QueryParams
		tags?: string[]
	} = {},
) {
	return client.fetch<T>(query, params, {
		...(dev && {
			token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
			perspective: 'previewDrafts',
		}),
		next: {
			revalidate: dev ? 0 : false,
			tags,
		},
	})
}

const builder = imageUrlBuilder(client)

export const urlFor = (source: Sanity.Image) => builder.image(source)

/* queries */

const navigationQuery = groq`
	title,
	items[]{
		...,
		internal->{ _type, title, metadata },
		links[]{
			...,
			internal->{ _type, title, metadata }
		}
	}
`

export async function getSite() {
	return await fetchSanity<Sanity.Site>(
		groq`
			*[_type == 'site'][0]{
				...,
				headerMenu->{ ${navigationQuery} },
				footerMenu->{ ${navigationQuery} }
			}
		`,
		{ tags: ['site'] },
	)
}
