export default function Date({
	date,
	className,
}: {
	date: string
} & React.HTMLAttributes<HTMLTimeElement>) {
	return (
		<time className={className} dateTime={date}>
			{date}
		</time>
	)
}
