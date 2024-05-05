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
		defineField({
			name: 'image',
			type: 'image',
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
				}),
			],
		}),
		defineField({
			name: 'showEmployees',
			type: 'boolean',
			initialValue: false,
		}),
	],
	preview: {
		select: {
			content: 'content',
			media: 'image',
		},
		prepare: ({ content, media }) => ({
			title: content[0]?.children[0]?.text,
			subtitle: 'Hero (main)',
			media,
		}),
	},
})
