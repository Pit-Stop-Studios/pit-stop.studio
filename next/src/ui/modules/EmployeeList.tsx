import { PortableText } from 'next-sanity'
import { urlFor } from '@/lib/sanity'

export default function EmployeeList({
	employees,
	content,
}: Partial<{
	employees: Sanity.Employee[]
	content: any
}>) {
	const size = 120

	return (
		<section className="section space-y-8 text-center">
			<header className="richtext">
				<PortableText value={content} />
			</header>

			<dl className="flex flex-wrap items-start justify-around gap-6">
				{employees?.map((employee, key) => (
					<div className="basis-[250px]" key={key}>
						<dt className="space-y-3">
							<figure
								className="bg-ink/5 mx-auto aspect-square overflow-hidden rounded-full"
								style={{ maxWidth: size }}
							>
								{employee.image && (
									<img
										className="aspect-square w-full object-cover"
										src={urlFor(employee.image)
											.size(size * 2, size * 2)
											.auto('format')
											.url()}
										alt=""
										width={size * 2}
										height={size * 2}
										loading="lazy"
										draggable={false}
									/>
								)}
							</figure>
							<div className="h3">{employee.name}</div>
						</dt>
						<dd>
							<div>{employee.title}</div>
						</dd>
					</div>
				))}
			</dl>
		</section>
	)
}
