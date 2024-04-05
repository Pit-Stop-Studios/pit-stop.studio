import getSite from '@/lib/getSite'

export default async function Footer() {
	const { title } = await getSite()

	return (
		<footer className="border-t border-current p-4">
			<p className="text-center text-sm">
				&copy; {new Date().getFullYear()}{' '}
				<span className="font-serif">{title}</span>
			</p>
		</footer>
	)
}
