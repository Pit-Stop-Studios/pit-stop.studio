import getSite from '@/lib/getSite'
import Link from 'next/link'
import Img from '@/ui/Img'
import Mask from '@/ui/Mask'
import Date from '@/ui/Date'
import Author from './Author'
import Categories from './Categories'

export default async function PostPreview({ post }: { post: Sanity.BlogPost }) {
	const { logo } = await getSite()

	return (
		<Link
			className="group block space-y-2 outline-0"
			href={`/blog/${post.metadata.slug.current}`}
		>
			<figure className="relative aspect-video place-content-center bg-ink/5 has-[svg]:grid">
				{post.metadata.image ? (
					<Img
						className="aspect-video w-full object-cover"
						image={post.metadata.image}
						alt={post.metadata.title}
						imageWidth={600}
					/>
				) : (
					<Mask image={logo} className="size-[8em] opacity-5" />
				)}

				<div className="absolute bottom-0 right-0 p-2 text-xs">
					<Categories className="justify-end" categories={post.categories} />
				</div>
			</figure>

			<div className="h3 decoration-dotted underline-offset-2 group-focus-within:underline group-hover:underline">
				{post.metadata.title}
			</div>

			<div className="flex flex-wrap items-center justify-between gap-x-4 text-sm">
				<Author author={post.author} />
				<Date className="block" value={post.publishDate} />
			</div>
		</Link>
	)
}
