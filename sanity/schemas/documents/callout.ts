import { defineField, defineType } from 'sanity'
import { VscInspect } from 'react-icons/vsc'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'callout',
	title: 'Callout',
	icon: VscInspect,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
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
		}),
	],
	preview: {
		select: {
			title: 'title',
			content: 'content',
			media: 'image',
		},
		prepare: ({ title, content, media }) => ({
			title,
			subtitle: getBlockText(content),
			media,
		}),
	},
})
