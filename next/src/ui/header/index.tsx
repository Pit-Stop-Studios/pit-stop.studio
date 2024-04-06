import getSite from '@/lib/getSite'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Mask from '@/ui/Mask'
import LinkList from './LinkList'
import CTA from '@/ui/CTA'
import CTAList from '@/ui/CTAList'

export default async function Header() {
	const { title, menu, ctas, logo } = await getSite()

	console.log({ title, logo, menu, ctas })

	return (
		<Wrapper className="sticky top-0 z-10 border-b border-current bg-canvas p-4">
			<div className="flex flex-wrap items-center justify-between gap-2">
				<Link className="flex items-center gap-2 font-serif" href="/">
					<Mask image={logo} className="h-[2em] w-[4em]" />
					{title}
				</Link>

				<nav className="flex gap-4">
					{menu?.map((item, key) => {
						switch (item._type) {
							case 'link':
								return <CTA className="link" link={item} key={key} />

							case 'link.list':
								return <LinkList {...item} key={key} />

							default:
								return null
						}
					})}
				</nav>

				<CTAList ctas={ctas} />
			</div>
		</Wrapper>
	)
}
