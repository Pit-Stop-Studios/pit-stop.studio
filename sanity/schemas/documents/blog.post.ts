import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'blog.post',
	title: 'Blog post',
	type: 'document',
	fields: [
		defineField({
			name: 'body',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'categories',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'blog.category' }],
				},
			],
		}),
		defineField({
			name: 'publishDate',
			type: 'date',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'author',
			type: 'reference',
			to: [{ type: 'employee' }],
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
		}),
	],
	preview: {
		select: {
			title: 'metadata.title',
			subtitle: 'publishDate',
		},
	},
	orderings: [
		{
			title: 'Date',
			name: 'date',
			by: [{ field: 'publishDate', direction: 'desc' }],
		},
		{
			title: 'Title',
			name: 'title',
			by: [{ field: 'title', direction: 'asc' }],
		},
	],
})
