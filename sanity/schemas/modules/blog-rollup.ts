import { defineField, defineType } from 'sanity'
import { VscEdit } from 'react-icons/vsc'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'blog-rollup',
	title: 'Blog rollup',
	icon: VscEdit,
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
			name: 'layout',
			type: 'string',
			options: {
				list: ['carousel', 'grid'],
				layout: 'radio',
			},
			initialValue: 'carousel',
		}),
	],
	preview: {
		select: {
			content: 'content',
			layout: 'layout',
		},
		prepare: ({ content, layout }) => ({
			title: getBlockText(content),
			subtitle: `Blog rollup (${layout})`,
		}),
	},
})
