import { urlFor } from '@/lib/sanity'
import { cn } from '@/lib/utils'

export default async function Mask({
	image,
	className,
}: {
	image: Sanity.Image
} & React.HTMLAttributes<HTMLDivElement>) {
	if (!image) return null

	return (
		<figure
			className={cn('bg-current', className)}
			style={{ mask: `url(${urlFor(image)}) center/contain no-repeat` }}
		/>
	)
}
