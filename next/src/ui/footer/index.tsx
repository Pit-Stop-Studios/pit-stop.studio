import getSite from '@/lib/getSite'
import { cn } from '@/lib/utils'
import css from './Footer.module.css'

export default async function Footer() {
	const { title } = await getSite()

	return (
		<footer className={cn(css.root, 'relative border-t border-current p-4')}>
			<p className="text-center text-sm">
				&copy; {new Date().getFullYear()}{' '}
				<span className="font-serif">{title}</span>
			</p>
		</footer>
	)
}
