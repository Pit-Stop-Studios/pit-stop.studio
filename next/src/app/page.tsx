import { fetchSanity, groq } from '@/lib/sanity'
import Modules from '@/ui/modules'

export default async function Page() {
	const page = await getPage()
	return <Modules modules={page?.modules} />
}

export async function generateMetadata() {
	const page = await getPage()
	return page.metadata
}

async function getPage() {
	return await fetchSanity<Sanity.Page>(
		groq`*[_type == 'page' && metadata.slug.current == 'index'][0]{
			...,
			modules[]{
				...,
				ctas[]{
					...,
					link{
						...,
						internal->{ title, metadata }
					}
				},
				employees[]->
			}
		}`,
		{
			tags: ['homepage'],
		},
	)
}
