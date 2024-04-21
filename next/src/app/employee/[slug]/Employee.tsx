import getSite from '@/lib/getSite'
import { urlFor } from '@/lib/sanity'
import { BASE_URL } from '@/lib/env'
import Mask from '@/ui/Mask'
import { PortableText } from 'next-sanity'
import Img from '@/ui/Img'
import Rollup from '@/ui/modules/blog/Rollup'

export default async function Employee({
	employee,
}: {
	employee: Sanity.Employee &
		Partial<{
			description: string
			posts: Sanity.BlogPost[]
		}>
}) {
	const { logo } = await getSite()

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		mainEntity: {
			'@id': employee.metadata.slug.current,
			'@type': 'Person',
			name: employee.name,
			jobTitle: employee.title,
			description: employee.description,
			image: urlFor(employee.image).size(400, 400).auto('format').url(),
			url: `${BASE_URL}/employee/${employee.metadata.slug.current}`,
		},
		hasPart: employee.posts?.map((post) => ({
			'@type': 'BlogPosting',
			headline: post.metadata.title,
			datePublished: post.publishDate + 'T00:00:00Z',
			url: `${BASE_URL}/blog/${post.metadata.slug.current}`,
			author: {
				'@id': employee.metadata.slug.current,
			},
		})),
	}

	return (
		<>
			<article className="section">
				<header className="grid items-start gap-x-12 gap-y-8 md:grid-cols-2">
					<div className="richtext md:sticky-below-header max-w-lg self-start [--offset:1rem] max-md:mx-auto">
						<h1>{employee.name}</h1>
						<p>{employee.title}</p>
						<Mask image={logo} className="!my-8 h-4 w-12" />
						<PortableText value={employee.content} />
					</div>

					<figure>
						<Img
							className="mx-auto w-full max-w-lg shadow-[.7ch_.7ch_#000]"
							image={employee.image}
							imageWidth={1000}
						/>
					</figure>
				</header>
			</article>

			<Rollup
				heading={<h2>Articles by {employee.name}</h2>}
				postsOverride={employee.posts}
			/>

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</>
	)
}
