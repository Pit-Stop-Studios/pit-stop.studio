import { cn, slug } from '@/lib/utils'

export default function TableOfContents({
	headings,
}: {
	headings: Sanity.BlogPost['headings']
}) {
	return (
		<aside className="md:sticky-below-header mx-auto w-full max-w-lg self-start [--offset:1rem] md:w-[250px]">
			<details
				className="accordion border-dashed border-current max-md:border"
				open
			>
				<summary className="p-4 font-serif md:text-sm">
					Table of Contents
				</summary>

				<ol className="anim-fade-to-b px-4 pb-4 text-sm">
					{headings?.map(({ text, style }, key) => (
						<li className={cn(style == 'h3' && 'ml-4')} key={key}>
							<a
								className="block py-1 decoration-dotted underline-offset-2 hover:underline"
								href={`#${slug(text)}`}
							>
								{text}
							</a>
						</li>
					))}
				</ol>
			</details>
		</aside>
	)
}
