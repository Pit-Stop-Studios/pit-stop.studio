import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'modules',
			type: 'array',
			of: [
				{ type: 'blog-rollup' },
				{ type: 'callout-module' },
				{ type: 'case-study-list' },
				{ type: 'contact-form' },
				{ type: 'employee-list' },
				{ type: 'faq-list' },
				{ type: 'hero.centered' },
				{ type: 'hero.main' },
				{ type: 'hero.postcard' },
				{ type: 'uvp-list' },
			],
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
		}),
	],
	preview: {
		select: {
			title: 'title',
			slug: 'metadata.slug.current',
		},
		prepare: ({ title, slug }) => ({
			title,
			subtitle: slug && (slug === 'index' ? '/' : `/${slug}`),
		}),
	},
})
