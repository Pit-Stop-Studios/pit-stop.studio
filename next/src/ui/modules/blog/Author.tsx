import Avatar from '@/ui/Avatar'

export default function Author({ author }: { author: Sanity.Employee }) {
	if (!author) return null

	return (
		<div className="flex items-center gap-1">
			<Avatar image={author.image} size={24} />

			{author.name}
		</div>
	)
}
