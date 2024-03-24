import { defineField, defineType } from 'sanity'
import { VscTag } from 'react-icons/vsc'

export default defineType({
	name: 'blog.category',
	title: 'Blog category',
	type: 'document',
	icon: VscTag,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: (doc: any) => doc.title,
			},
			validation: (Rule) => Rule.required(),
		}),
	],
})
