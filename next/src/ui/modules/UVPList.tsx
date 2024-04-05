import { PortableText } from 'next-sanity'

export default function UVPList({
	items,
	content,
}: Partial<{
	items: {
		icon: Sanity.Image
		content: any
	}[]
	content: any
}>) {
	return (
		<section className="section space-y-8">
			<header className="richtext max-w-lg">
				<PortableText value={content} />
			</header>

			<ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
				{items?.map((item, key) => (
					<li className="richtext" key={key}>
						<PortableText value={item.content} />
					</li>
				))}
			</ul>
		</section>
	)
}
