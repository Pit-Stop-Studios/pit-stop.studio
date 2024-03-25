import getSite from '@/lib/getSite'

export default async function Footer() {
	const { title } = await getSite()

	return (
		<footer>
			<p className="text-center text-sm">
				&copy; {new Date().getFullYear()} {title}
			</p>
		</footer>
	)
}
