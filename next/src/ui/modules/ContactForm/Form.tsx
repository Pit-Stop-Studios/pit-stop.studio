import { AiOutlineSwapRight } from 'react-icons/ai'

export default function Form({
	submitLabel = 'Submit',
}: {
	submitLabel?: string
}) {
	return (
		<form
			className="form grid space-y-3"
			action="https://formspree.io/f/xjvnpvjr"
			method="POST"
		>
			<label>
				<span className="font-serif text-xs">Name</span>
				<input
					name="name"
					type="text"
					placeholder="Yuki Tsunoda"
					autoComplete="name"
					required
				/>
			</label>

			<label>
				<span className="font-serif text-xs">Email</span>
				<input
					name="email"
					type="email"
					placeholder="info@pit-stop.studio"
					autoComplete="email"
					required
				/>
			</label>

			<label>
				<span className="font-serif text-xs">Company</span>
				<input
					name="company"
					type="text"
					placeholder="RB Formula One"
					autoComplete="organization"
				/>
			</label>

			<label>
				<span className="font-serif text-xs">Message</span>
				<textarea
					name="message"
					rows={4}
					placeholder="I need help with..."
					required
				/>
			</label>

			<div className="!mt-4">
				<button className="action-arrow">
					{submitLabel}
					<AiOutlineSwapRight className="text-xl" />
				</button>
			</div>
		</form>
	)
}
