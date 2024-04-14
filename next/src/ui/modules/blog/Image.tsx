import Img from '@/ui/Img'

export default function Image({ value }: { value: Sanity.Image }) {
	return (
		<figure className="max-md:full-bleed text-center md:![grid-column:bleed]">
			<Img className="mx-auto" image={value} imageWidth={1000} />

			{value.caption && (
				<figcaption className="mx-auto max-w-xl px-4 pt-2 text-sm italic text-ink/50">
					{value.caption}
				</figcaption>
			)}
		</figure>
	)
}
