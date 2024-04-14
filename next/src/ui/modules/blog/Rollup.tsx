import { fetchSanity, groq } from '@/lib/sanity'
import CTAList from '@/ui/CTAList'
import { PortableText } from '@portabletext/react'
import PostPreview from './PostPreview'
import { cn } from '@/lib/utils'

export default async function Rollup({
	content,
	ctas,
	layout,
}: Partial<{
	content: any
	ctas: Sanity.CTA[]
	layout: 'carousel' | 'grid'
}>) {
	const posts = await fetchSanity<Sanity.BlogPost[]>(
		groq`*[_type == 'blog.post' && defined(body)]|order(publishDate desc){
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

			<ul
				className={cn(
					'gap-8',
					layout === 'carousel'
						? 'carousel max-md:full-bleed max-md:px-4 md:[--size:275px]'
						: 'grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]',
				)}
			>
				{posts?.map((post, key) => (
					<li className="!grow" key={key}>
						<PostPreview post={post} />
					</li>
				))}
			</ul>
		</section>
	)
}
