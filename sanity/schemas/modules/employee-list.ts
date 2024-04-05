import { defineField, defineType } from 'sanity'
import { VscOrganization } from 'react-icons/vsc'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'employee-list',
	title: 'Employee list',
	icon: VscOrganization,
	type: 'document',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'employees',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'employee' }] }],
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Employee list',
		}),
	},
})
