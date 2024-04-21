import { defineField, defineType } from 'sanity'
import { IoIosImage } from 'react-icons/io'
import { TbLanguageHiragana } from 'react-icons/tb'
import Ruby from '../../components/Ruby'

export default defineType({
	name: 'blog.post',
	title: 'Blog post',
	type: 'document',
	fields: [
		defineField({
			name: 'body',
			type: 'array',
			of: [
				{
					type: 'block',
					marks: {
						annotations: [
							{
								name: 'ruby',
								title: 'Ruby',
								type: 'object',
								icon: TbLanguageHiragana,
								fields: [
									defineField({
										name: 'annotation',
										type: 'string',
									}),
								],
								components: {
									annotation: Ruby,
								},
							},
						],
					},
				},
				{
					type: 'image',
					icon: IoIosImage,
					fields: [
						defineField({
							name: 'alt',
							type: 'string',
						}),
						defineField({
							name: 'caption',
							type: 'text',
							rows: 2,
						}),
						defineField({
							name: 'source',
							type: 'url',
						}),
					],
				},
			],
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
			media: 'metadata.image',
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
