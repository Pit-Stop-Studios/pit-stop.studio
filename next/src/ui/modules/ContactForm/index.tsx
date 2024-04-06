import { PortableText } from 'next-sanity'
import Form from './Form'

export default function ContactForm({
	content,
	submitLabel,
}: Partial<{
	content: any
	submitLabel: string
}>) {
	return (
		<section
			id="contact"
			className="section grid gap-x-12 gap-y-8 md:grid-cols-2"
		>
			<div className="richtext">
				<PortableText value={content} />
			</div>

			<Form submitLabel={submitLabel} />
		</section>
	)
}
