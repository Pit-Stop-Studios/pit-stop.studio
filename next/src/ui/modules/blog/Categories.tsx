import { cn } from '@/lib/utils'

export default function Categories({
	categories,
	className,
	inverted,
}: {
	categories?: Sanity.BlogCategory[]
	inverted?: boolean
} & React.HTMLAttributes<HTMLUListElement>) {
	return (
		<ul className={cn('flex flex-wrap items-center gap-x-1', className)}>
			{categories?.map(({ title }, key) => (
				<li
					className={cn(
						'rounded-full px-[.75em] backdrop-blur',
						inverted
							? 'bg-hamilton/60 text-white'
							: 'bg-hamilton/15 text-hamilton',
					)}
					key={key}
				>
					{title}
				</li>
			))}
		</ul>
	)
}
