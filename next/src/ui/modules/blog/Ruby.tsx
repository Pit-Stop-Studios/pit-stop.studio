import type { PortableTextMarkComponentProps } from 'next-sanity'

export default function Ruby({
	value,
	children,
}: PortableTextMarkComponentProps<{
	_type: 'ruby'
	annotation: string
}>) {
	return (
		<ruby>
			{children}
			<rt>{value?.annotation}</rt>
		</ruby>
	)
}
