import { defineArrayMember, defineField, defineType } from 'sanity'
import { getBlockText } from '../../src/utils'
import { VscListOrdered } from 'react-icons/vsc'

export default defineType({
	name: 'uvp-list',
	title: 'UVP List',
	type: 'object',
	icon: VscListOrdered,
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'items',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					fields: [
						defineField({
							name: 'icon',
							type: 'image',
						}),
						defineField({
							name: 'content',
							type: 'array',
							of: [{ type: 'block' }],
						}),
					],
				}),
			],
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'UVP List',
		}),
	},
})
