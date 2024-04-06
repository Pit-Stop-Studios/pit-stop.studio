import getSite from '@/lib/getSite'
import Logo from '@/ui/Logo'
import { cn } from '@/lib/utils'
import css from './Footer.module.css'
import CTA from '../CTA'

export default async function Footer() {
	const { title, footerMenu } = await getSite()

	return (
		<footer className={cn(css.root, 'relative border-t border-current')}>
			<div className="section space-y-8">
				<div className="flex flex-wrap items-center justify-between gap-8 max-md:flex-col">
					<div>
						<Logo className="max-md:flex-col" />
					</div>

					<nav className="flex items-center justify-center gap-x-12 gap-y-3 max-md:flex-col">
						{footerMenu?.map((item, key) => {
							switch (item._type) {
								case 'link':
									return (
										<CTA
											className="font-serif transition-colors hover:text-hamilton"
											link={item}
											key={key}
										/>
									)

								default:
									return null
							}
						})}
					</nav>
				</div>

				<p className="text-center text-xs">
					&copy; {new Date().getFullYear()}{' '}
					<span className="font-serif">{title}</span>
				</p>
			</div>
		</footer>
	)
}
