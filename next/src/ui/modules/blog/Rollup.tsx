import { fetchSanity, groq } from '@/lib/sanity'
import CTAList from '@/ui/CTAList'
import { PortableText } from '@portabletext/react'
import PostCard from './PostCard'

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
			categories[]->
		}`,
		{ tags: ['posts'] },
	)

	return (
		<section className="section space-y-4">
			<header className="flex flex-wrap items-end gap-4">
				<div className="richtext grow">
					<PortableText value={content} />
				</div>

				<CTAList className="*:hover:underline" ctas={ctas} />
			</header>

			<ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
				{posts?.map((post, key) => (
					<li key={key}>
						<PostCard post={post} />
					</li>
				))}
			</ul>
		</section>
	)
}
