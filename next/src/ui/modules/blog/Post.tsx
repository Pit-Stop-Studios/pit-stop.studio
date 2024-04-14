import Categories from './Categories'
import Date from '@/ui/Date'
import Author from './Author'
import ReadTime from './ReadTime'
import TableOfContents from './TableOfContents'
import Mask from '@/ui/Mask'
import { PortableText } from '@portabletext/react'
import AnchorHeading from './AnchorHeading'
import Image from './Image'
import { cn } from '@/lib/utils'
import css from './Post.module.css'
import BackToBlog from './BackToBlog'

export default function Post({ post }: { post: Sanity.BlogPost }) {
	return (
		<article>
			<header className="section space-y-3 text-center">
				<h1 className="h1 mb-6">{post.metadata.title}</h1>

				<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
					<Date value={post.publishDate} />
					<Author author={post.author} />
					<ReadTime value={post.readTime} />
				</div>

				{post.categories && (
					<div>
						<Categories
							className="justify-center text-sm"
							categories={post.categories}
						/>
					</div>
				)}
			</header>

			<div className="section grid gap-8 md:grid-cols-[1fr,auto]">
				<TableOfContents headings={post.headings} />

				<div className="md:-order-1">
					<BackToBlog />

					<div
						className={cn(
							css.body,
							'richtext mx-auto mb-8 grid gap-4 max-md:max-w-lg',
						)}
					>
						<PortableText
							value={post.body}
							components={{
								block: {
									h2: (node) => <AnchorHeading as="h2" {...node} />,
									h3: (node) => <AnchorHeading as="h3" {...node} />,
								},
								types: {
									image: Image,
								},
							}}
						/>
					</div>

					<BackToBlog />
				</div>
			</div>
		</article>
	)
}
