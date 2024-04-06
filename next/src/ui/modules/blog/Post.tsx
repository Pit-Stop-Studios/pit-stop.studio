import getSite from '@/lib/getSite'
import Date from '@/ui/Date'
import ReadTime from './ReadTime'
import { PortableText } from '@portabletext/react'
import Mask from '@/ui/Mask'
import AnchorHeading from './AnchorHeading'
import css from './Post.module.css'
import { cn } from '@/lib/utils'
import TableOfContents from './TableOfContents'
import Author from './Author'

export default async function Post({ post }: { post: Sanity.BlogPost }) {
	const { logo } = await getSite()

	return (
		<article>
			<header className="section space-y-3 text-center">
				<h1 className="h1">{post.metadata.title}</h1>
				<div className="flex flex-wrap items-center justify-center gap-x-4">
					<Date value={post.publishDate} />
					<Author author={post.author} />
					<ReadTime value={post.readTime} />
				</div>
			</header>

			<div className="section grid gap-8 md:grid-cols-[1fr,auto]">
				<TableOfContents headings={post.headings} />

				<div className={cn(css.body, 'richtext mx-auto max-w-lg md:-order-1')}>
					<PortableText
						value={post.body}
						components={{
							block: {
								h2: (node) => <AnchorHeading as="h2" {...node} />,
								h3: (node) => <AnchorHeading as="h3" {...node} />,
							},
						}}
					/>

					<Mask image={logo} className="mx-auto size-12" />
				</div>
			</div>
		</article>
	)
}
