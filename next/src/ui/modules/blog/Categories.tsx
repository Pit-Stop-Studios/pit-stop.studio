import { cn } from '@/lib/utils'

export default function Categories({
	categories,
	className,
}: {
	categories?: Sanity.BlogCategory[]
} & React.HTMLAttributes<HTMLUListElement>) {
	return (
		<ul className={cn('flex flex-wrap items-center gap-x-1', className)}>
			{categories?.map(({ title }, key) => (
				<li
					className="rounded-full bg-hamilton/15 px-[.75em] text-hamilton backdrop-blur"
					key={key}
				>
					{title}
				</li>
			))}
		</ul>
	)
}
