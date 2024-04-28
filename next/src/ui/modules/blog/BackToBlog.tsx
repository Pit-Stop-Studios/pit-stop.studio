import { getSite } from '@/lib/sanity'
import Link from 'next/link'
import Mask from '@/ui/Mask'

export default async function BackToBlog({}: {}) {
	const { logo } = await getSite()

	return (
		<div className="text-center">
			<Link
				href="/blog"
				className="inline-block text-center transition-colors hover:text-hamilton"
				aria-label="Back to blog"
			>
				<Mask image={logo} className="size-12" />
			</Link>
		</div>
	)
}
