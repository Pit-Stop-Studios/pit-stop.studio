import { RiTimerFill } from 'react-icons/ri'

export default function ReadTime({ value }: { value: number }) {
	return (
		<span className="with-icon gap-1">
			<RiTimerFill />
			読了時間: {Math.ceil(value)}分
		</span>
	)
}
