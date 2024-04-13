import { PortableText } from 'next-sanity'
import CTAList from '../CTAList'
import Img from '../Img'

export default function CalloutModule({
	callout,
}: Partial<{
	callout: Sanity.Callout
}>) {
	return (
		<section className="mx-auto md:max-w-screen-lg">
			<div className="section grid items-center gap-x-12 gap-y-6 bg-hamilton/15 md:grid-cols-[2fr,1fr] md:rounded-3xl md:px-8">
				<div className="richtext">
					<PortableText value={callout?.content} />
					<CTAList className="!mt-6 max-sm:*:w-full" ctas={callout?.ctas} />
				</div>

				<figure className="mx-auto max-w-sm">
					<Img image={callout?.image} />
				</figure>
			</div>
		</section>
	)
}
