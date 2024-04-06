import { cn, slug } from '@/lib/utils'

export default function TableOfContents({
	headings,
}: {
	headings: Sanity.BlogPost['headings']
}) {
	return (
		<aside className="md:sticky-below-header mx-auto max-w-lg self-start [--offset:1rem] md:w-[250px]">
			<details className="accordion space-y-3" open>
				<summary className="font-serif text-xs">Table of Contents</summary>

				<ol className="space-y-2 text-sm">
					{headings?.map(({ text, style }, key) => (
						<li className={cn(style == 'h3' && 'ml-4')} key={key}>
							<a
								className="decoration-dotted underline-offset-2 hover:underline"
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
