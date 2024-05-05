import { defineField, defineType } from 'sanity'
import { orderRankField } from '@sanity/orderable-document-list'
import { VscAccount } from 'react-icons/vsc'

export default defineType({
	name: 'employee',
	title: 'Employee',
	icon: VscAccount,
	type: 'document',
	fields: [
		orderRankField({ type: 'employee' }),
		defineField({
			name: 'name',
			type: 'string',
		}),
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
			name: 'image',
			type: 'image',
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
		}),
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'title',
			media: 'image',
		},
	},
})
