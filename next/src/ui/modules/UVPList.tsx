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
				<PortableText
					value={content}
					components={{
						marks: {
							strong: ({ children }) => (
								<strong className="font-normal text-hamilton">
									{children}
								</strong>
							),
						},
					}}
				/>
			</header>

			<ul className="carousel max-lg:full-bleed grid-cols-4 gap-6 [--size:200px] max-lg:px-4 md:gap-x-12 lg:grid">
				{items?.map((item, key) => (
					<li className="richtext [&_h3]:h2" key={key}>
						<PortableText value={item.content} />
					</li>
				))}
			</ul>
		</section>
	)
}
