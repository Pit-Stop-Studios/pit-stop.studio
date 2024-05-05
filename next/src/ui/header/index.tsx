import { getSite } from '@/lib/sanity'
import Wrapper from './Wrapper'
import Logo from '@/ui/Logo'
import LinkList from './LinkList'
import CTA from '@/ui/CTA'
import CTAList from '@/ui/CTAList'

export default async function Header() {
	const { headerMenu, ctas } = await getSite()

	return (
		<Wrapper className="sticky top-0 z-10 px-4">
			<div className="flex flex-wrap items-center justify-between gap-2">
				<Logo />

				<nav className="flex gap-4">
					{headerMenu?.items?.map((item, key) => {
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

				<CTAList className="my-2 md:mx-2" ctas={ctas} />
			</div>
		</Wrapper>
	)
}
