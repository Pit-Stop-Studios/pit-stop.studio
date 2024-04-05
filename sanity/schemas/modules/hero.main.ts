import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaLeft } from 'react-icons/tfi'

export default defineType({
	name: 'hero.main',
	title: 'Hero (main)',
	icon: TfiLayoutCtaLeft,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: content[0]?.children[0]?.text,
			subtitle: 'Hero (main)',
		}),
	},
})
