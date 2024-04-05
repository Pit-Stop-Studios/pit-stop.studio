import { PortableText } from '@portabletext/react'
import CTAList from '@/ui/CTAList'

export default function HeroCentered({
	content,
	ctas,
}: Partial<{
	content: any
	ctas: Sanity.CTA[]
}>) {
	return (
		<section className="section flex max-w-[initial] flex-col">
			<div className="richtext mt-auto max-w-lg text-lg">
				<PortableText value={content} />
				<CTAList ctas={ctas} />
			</div>
		</section>
	)
}
