import { slug } from '@/lib/utils'
import type { PortableTextBlock, PortableTextComponentProps } from 'next-sanity'

export default function AnchorHeading({
	as: Tag,
	value,
	children,
}: {
	as: keyof JSX.IntrinsicElements
} & PortableTextComponentProps<PortableTextBlock>) {
	const id = slug(value.children[0].text)

	return (
		<Tag id={id}>
			{children}

			<a className="!no-underline" href={`#${id}`}>
				🔗
			</a>
		</Tag>
	)
}
