import Avatar from '@/ui/Avatar'
import Link from 'next/link'

export default function Author({ author }: { author: Sanity.Employee }) {
	if (!author) return null

	return (
		<Link
			className="group flex items-center gap-1"
			href={`/employee/${author.metadata.slug.current}`}
		>
			<Avatar image={author.image} size={24} />

			<span className="decoration-dotted group-hover:underline">
				{author.name}
			</span>
		</Link>
	)
}
