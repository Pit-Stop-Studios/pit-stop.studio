import { fetchSanity, groq } from '@/lib/sanity'
import { PortableText } from 'next-sanity'
import Img from '@/ui/Img'
import { AiOutlineSwapRight } from 'react-icons/ai'

export default async function CaseStudyList({
	content,
}: Partial<{
	content: any
}>) {
	const caseStudies = await fetchSanity<Sanity.CaseStudy[]>(
		groq`*[_type == 'case-study']|order(title)`,
		{ tags: ['case-studies'] },
	)

	return (
		<section className="section space-y-12">
			<header className="richtext text-center">
				<PortableText value={content} />
			</header>

			{caseStudies?.map((caseStudy) => (
				<article
					className="group grid items-center gap-x-12 md:grid-cols-2"
					key={caseStudy._id}
				>
					<figure className="md:group-odd:order-1">
						<Img image={caseStudy.metadata.image} imageWidth={800} />
					</figure>

					<div className="mx-auto max-w-sm space-y-3">
						<h2 className="h2">{caseStudy.title}</h2>

						<dl>
							<dt>{caseStudy.metadata.title}</dt>

							{caseStudy.url && (
								<dd>
									<a className="action-arrow" href={caseStudy.url}>
										{caseStudy.url}
										<AiOutlineSwapRight className="text-xl" />
									</a>
								</dd>
							)}

							{caseStudy.metadata.description && (
								<dd>{caseStudy.metadata.description}</dd>
							)}
						</dl>
					</div>
				</article>
			))}
		</section>
	)
}
