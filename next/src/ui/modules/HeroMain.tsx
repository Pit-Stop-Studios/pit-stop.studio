import { PortableText } from '@portabletext/react'
import CTAList from '@/ui/CTAList'
import Img from '../Img'

export default function HeroCentered({
	content,
	ctas,
	image,
}: Partial<{
	content: any
	ctas: Sanity.CTA[]
	image: Sanity.Image
}>) {
	return (
		<section className="section grid max-w-[initial] gap-y-4 p-4 md:grid-cols-2">
			<Img
				className="order-1 max-h-[50vh] w-full rounded-3xl object-cover 2xl:max-h-[70svh]"
				image={image}
				imageWidth={1000}
				loading="eager"
				draggable={false}
				priority
			/>

			<div className="richtext relative mt-auto max-w-lg py-4 text-lg">
				<PortableText
					value={content}
					components={{
						marks: {
							strong: ({ children }) => (
								<strong className="font-normal text-hamilton">
									{children}
								</strong>
							),
						},
					}}
				/>
				<CTAList ctas={ctas} />
			</div>
		</section>
	)
}
