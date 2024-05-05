import { cn } from '@/lib/utils'
import Img from './Img'

export default function Avatar({
	image,
	size = 120,
	className,
	style,
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
			style={{ width: size, ...style }}
		>
			{image && (
				<Img
					className="aspect-square w-full object-cover"
					image={image}
					imageWidth={size * 2}
					draggable={false}
				/>
			)}
		</figure>
	)
}
