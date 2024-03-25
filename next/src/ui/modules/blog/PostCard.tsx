import Img from '@/ui/Img'
import Link from 'next/link'

export default function PostCard({ post }: { post: Sanity.BlogPost }) {
	return (
		<Link
			className="group space-y-2"
			href={`/blog/${post.metadata.slug.current}`}
		>
			<figure className="aspect-video bg-neutral-200">
				<Img
					className="aspect-video w-full"
					image={post.metadata.image}
					alt={post.metadata.title}
				/>
			</figure>

			<div className="h3 group-hover:underline">{post.title}</div>

			<time className="block" dateTime={post.publishDate}>
				{post.publishDate}
			</time>
		</Link>
	)
}
