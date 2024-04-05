import CTA from '@/ui/CTA'
import InteractiveDetails from './InteractiveDetails'

export default function LinkList({ label, links }: Sanity.LinkList) {
	return (
		<InteractiveDetails className="relative">
			<summary>{label}</summary>

			<ul className="anim-fade-to-b bg-canvas absolute left-0 top-full min-w-max">
				{links?.map((link, key) => (
					<li key={key}>
						<CTA className="link" link={link} />
					</li>
				))}
			</ul>
		</InteractiveDetails>
	)
}
