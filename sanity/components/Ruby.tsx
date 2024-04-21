export default function Ruby(props: any) {
	return (
		<span>
			<ruby>
				{props.renderDefault(props)}
				<rt>{props.value?.annotation}</rt>
			</ruby>
		</span>
	)
}
