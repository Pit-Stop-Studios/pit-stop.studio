import { urlFor } from '@/lib/sanity'
import { cn } from '@/lib/utils'

export default function Mask({
	image,
	className,
}: {
	image: Sanity.Image
} & React.HTMLAttributes<HTMLDivElement>) {
	console.log({ image })

	if (!image) return null

	return (
		<figure
			className={cn('bg-current', className)}
			style={{ mask: `url(${urlFor(image).url()}) center/contain no-repeat` }}
		/>
	)
}
