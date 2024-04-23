import { defineField, defineType } from 'sanity'
import { VscBriefcase } from 'react-icons/vsc'

export default defineType({
	name: 'case-study-list',
	title: 'Case study list',
	type: 'object',
	icon: VscBriefcase,
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
})
