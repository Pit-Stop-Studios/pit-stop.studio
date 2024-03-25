import CTA from '../CTA'

export default function LinkList({ label, links }: Sanity.LinkList) {
	return (
		<details className="relative">
			<summary>{label}</summary>

			<ul className="anim-fade-to-b absolute left-0 top-full min-w-max bg-white">
				{links?.map((link, key) => (
					<li key={key}>
						<CTA className="link" link={link} />
					</li>
				))}
			</ul>
		</details>
	)
}
