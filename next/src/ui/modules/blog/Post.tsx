import getSite from '@/lib/getSite'
import Date from '@/ui/Date'
import { PortableText } from '@portabletext/react'
import Mask from '@/ui/Mask'

export default async function Post({ post }: { post: Sanity.BlogPost }) {
	const { logo } = await getSite()

	return (
		<article>
			<header className="section space-y-3 text-center">
				<h1 className="h1">{post.metadata.title}</h1>
				<div>
					<Date date={post.publishDate} />
				</div>
			</header>

			<div className="section grid gap-8 md:grid-cols-[1fr,auto]">
				<aside className="md:sticky-below-header self-start [--offset:1rem] md:w-[250px]">
					<h2 className="font-serif text-sm">Table of Contents</h2>
				</aside>

				<div className="richtext mx-auto max-w-xl md:-order-1 [&_:is(h2,h3,h4,h5,h6)]:!mt-[1.5em] [&_:is(h2,h3,h4,h5,h6)]:text-pretty">
					<PortableText value={post.body} />

					<Mask image={logo} className="mx-auto size-12" />
				</div>
			</div>
		</article>
	)
}
