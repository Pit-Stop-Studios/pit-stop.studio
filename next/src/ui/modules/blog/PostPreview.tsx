import getSite from '@/lib/getSite'
import Link from 'next/link'
import Img from '@/ui/Img'
import Mask from '@/ui/Mask'
import Date from '@/ui/Date'

export default async function PostPreview({ post }: { post: Sanity.BlogPost }) {
	const { logo } = await getSite()

	return (
		<Link
			className="group space-y-2"
			href={`/blog/${post.metadata.slug.current}`}
		>
			<figure className="bg-ink/5 grid aspect-video place-content-center">
				{post.metadata.image ? (
					<Img
						className="aspect-video w-full"
						image={post.metadata.image}
						alt={post.metadata.title}
					/>
				) : (
					<Mask image={logo} className="size-[8em] opacity-5" />
				)}
			</figure>

			<div className="h3 decoration-dotted underline-offset-2 group-hover:underline">
				{post.metadata.title}
			</div>

			<div className="text-sm">
				<Date className="block" value={post.publishDate} />
			</div>
		</Link>
	)
}
