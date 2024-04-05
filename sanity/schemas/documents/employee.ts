import { defineField, defineType } from 'sanity'
import { VscAccount } from 'react-icons/vsc'

export default defineType({
	name: 'employee',
	title: 'Employee',
	icon: VscAccount,
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			type: 'string',
		}),
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'image',
			type: 'image',
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
