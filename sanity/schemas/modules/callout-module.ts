import { defineField, defineType } from 'sanity'
import { VscInspect } from 'react-icons/vsc'

export default defineType({
	name: 'callout-module',
	title: 'Callout module',
	icon: VscInspect,
	type: 'object',
	fields: [
		defineField({
			name: 'callout',
			type: 'reference',
			to: [{ type: 'callout' }],
		}),
	],
	preview: {
		select: {
			title: 'callout.title',
		},
		prepare: ({ title }) => ({
			title,
			subtitle: 'Callout module',
		}),
	},
})
