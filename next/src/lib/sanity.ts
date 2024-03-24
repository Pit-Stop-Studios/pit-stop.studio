import { createClient, type QueryParams } from 'next-sanity'
import dev from '@/lib/env'
export { groq } from 'next-sanity'

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2023-12-03',
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
