import { AiOutlineSwapRight } from 'react-icons/ai'

export default function Form({
	submitLabel = 'Submit',
}: {
	submitLabel?: string
}) {
	return (
		<form
			className="form grid space-y-4"
			action="https://formspree.io/f/xqkrgopq"
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

			<label className="flex items-center gap-x-4 max-sm:flex-wrap">
				<span className="shrink-0 font-serif text-xs">I want:</span>
				<select name="needs" id="needs" className="w-full" required>
					<option disabled defaultValue="" value="">
						Select a project type
					</option>
					{[
						'Landing page(s)',
						'New static website / blog',
						'New e-commerce website',
						'Something else',
					].map((option) => (
						<option value={option} key={option}>
							{option}
						</option>
					))}
				</select>
			</label>

			<label className="flex flex-wrap items-center gap-x-4">
				<span className="font-serif text-xs">
					Do you already have a design?
				</span>
				<label className="flex items-center gap-x-[.5em]">
					<input type="radio" name="design" id="design-yes" /> Yes
				</label>
				<label className="flex items-center gap-x-[.5em]">
					<input type="radio" name="design" id="design-no" /> No
				</label>
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
