import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site',
	type: 'document',
	fieldsets: [
		{ name: 'navigation', title: 'Navigation', options: { columns: 2 } },
	],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			type: 'string',
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
			validation: (Rule) => Rule.max(1),
		}),
		defineField({
			name: 'headerMenu',
			type: 'reference',
			to: [{ type: 'navigation' }],
			fieldset: 'navigation',
		}),
		defineField({
			name: 'footerMenu',
			type: 'reference',
			to: [{ type: 'navigation' }],
			fieldset: 'navigation',
		}),
		defineField({
			name: 'logo',
			type: 'image',
		}),
	],
})
