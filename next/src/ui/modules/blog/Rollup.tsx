import { fetchSanity, groq } from '@/lib/sanity'
import CTAList from '@/ui/CTAList'
import { PortableText } from '@portabletext/react'
import PostPreview from './PostPreview'

export default async function Rollup({
	content,
	ctas,
}: Partial<{
	content: any
	ctas: Sanity.CTA[]
}>) {
	const posts = await fetchSanity<Sanity.BlogPost[]>(
		groq`*[_type == 'blog.post']|order(publishDate desc){
			...,
			categories[]->,
			author->
		}`,
		{ tags: ['posts'] },
	)

	return (
		<section className="section space-y-4">
			<header className="flex flex-wrap items-end gap-x-4 gap-y-2">
				<div className="richtext grow">
					<PortableText value={content} />
				</div>

				<CTAList ctas={ctas} />
			</header>

			<ul className="carousel max-md:full-bleed grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 max-md:px-4 md:grid">
				{posts?.map((post, key) => (
					<li key={key}>
						<PostPreview post={post} />
					</li>
				))}
			</ul>
		</section>
	)
}
