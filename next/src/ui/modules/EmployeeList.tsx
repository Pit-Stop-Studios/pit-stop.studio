import { PortableText } from 'next-sanity'
import Avatar from '../Avatar'

export default function EmployeeList({
	employees,
	content,
}: Partial<{
	employees: Sanity.Employee[]
	content: any
}>) {
	return (
		<section id="about" className="section space-y-8 text-center">
			<header className="richtext">
				<PortableText value={content} />
			</header>

			<dl className="flex flex-wrap items-start justify-around gap-8">
				{employees?.map((employee, key) => (
					<div className="basis-[300px] *:space-y-3" key={key}>
						<dt>
							<Avatar className="mx-auto" image={employee.image} />
							<div className="h3">{employee.name}</div>
						</dt>
						<dd>
							<div>{employee.title}</div>

							{employee.content && (
								<div className="richtext text-sm">
									<PortableText value={employee.content} />
								</div>
							)}
						</dd>
					</div>
				))}
			</dl>
		</section>
	)
}
