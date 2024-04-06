import getSite from '@/lib/getSite'
import Link from 'next/link'
import Mask from './Mask'
import { cn } from '@/lib/utils'

export default async function Logo({
	className,
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
	const { title, logo } = await getSite()

	return (
		<Link
			className={cn('flex items-center gap-2 font-serif', className)}
			href="/"
		>
			<Mask image={logo} className="h-[2em] w-[4em]" />
			{title}
		</Link>
	)
}
