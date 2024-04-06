import { urlFor } from '@/lib/sanity'
import { cn } from '@/lib/utils'

export default function Avatar({
	image,
	size = 120,
	className,
}: {
	image: Sanity.Image
	size?: number
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<figure
			className={cn(
				'aspect-square overflow-hidden rounded-full bg-ink/5',
				className,
			)}
			style={{ maxWidth: size }}
		>
			{image && (
				<img
					className="aspect-square w-full object-cover"
					src={urlFor(image)
						.size(size * 2, size * 2)
						.auto('format')
						.url()}
					alt=""
					width={size * 2}
					height={size * 2}
					loading="lazy"
					draggable={false}
				/>
			)}
		</figure>
	)
}
