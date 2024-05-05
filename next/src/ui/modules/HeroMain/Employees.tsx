import { fetchSanity, groq } from '@/lib/sanity'
import Link from 'next/link'
import Avatar from '@/ui/Avatar'

export default async function Employees({}: {}) {
	const employees = await fetchSanity<Sanity.Employee[]>(
		groq`*[_type == 'employee']|order(orderRank){
			name,
			title,
			image
		}`,
		{ tags: ['employees'] },
	)

	return (
		<Link
			href="#about"
			className="mt-6 flex max-w-max flex-wrap items-center gap-4"
		>
			<h2 className="technical order-1 text-xs text-ink/40">About Us</h2>

			<div className="flex">
				{employees.map((employee, key) => (
					<Avatar
						className="relative -mr-2 shrink-0 border-2 border-canvas hover:!z-10"
						style={{ zIndex: employees.length - key }}
						image={employee.image}
						size={40}
						key={key}
					/>
				))}
			</div>
		</Link>
	)
}
