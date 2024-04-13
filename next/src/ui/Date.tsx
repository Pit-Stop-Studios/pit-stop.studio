export default function ({
	value,
	className,
}: {
	value: string
} & React.HTMLAttributes<HTMLTimeElement>) {
	if (!value) return null

	const formatted = new Date(value + 'T00:00:00').toLocaleDateString('ja-JP', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	})

	return (
		<time className={className} dateTime={value}>
			{formatted}
		</time>
	)
}
