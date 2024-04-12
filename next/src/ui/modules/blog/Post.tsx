import getSite from '@/lib/getSite'
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

export default async function Post({ post }: { post: Sanity.BlogPost }) {
	const { logo } = await getSite()

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

				<div
					className={cn(
						css.body,
						'richtext mx-auto grid gap-4 max-md:max-w-lg md:-order-1',
					)}
				>
					<Mask image={logo} className="mx-auto -mt-4 size-12 md:-mt-8" />

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

					<Mask image={logo} className="mx-auto size-12" />
				</div>
			</div>
		</article>
	)
}
