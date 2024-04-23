import { defineField, defineType } from 'sanity'
import { VscBriefcase } from 'react-icons/vsc'

export default defineType({
	name: 'case-study',
	title: 'Case study',
	icon: VscBriefcase,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'metadata.image',
		},
	},
})
