import { defineField, defineType } from 'sanity'
import { getBlockText } from '../../src/utils'
import { VscInbox } from 'react-icons/vsc'

export default defineType({
	name: 'contact-form',
	title: 'Contact form',
	icon: VscInbox,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'submitLabel',
			type: 'string',
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Contact form',
		}),
	},
})
