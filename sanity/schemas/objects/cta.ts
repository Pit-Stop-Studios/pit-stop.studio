import { defineField, defineType } from 'sanity'
import { VscInspect } from 'react-icons/vsc'

export default defineType({
	name: 'cta',
	title: 'Call-to-action',
	icon: VscInspect,
	type: 'object',
	fields: [
		defineField({
			name: 'link',
			type: 'link',
		}),
		defineField({
			name: 'style',
			type: 'string',
			options: {
				list: [
					{ title: 'action', value: 'action' },
					{ title: 'arrow', value: 'action-arrow' },
					{ title: 'link', value: 'link' },
				],
			},
		}),
	],
	preview: {
		select: {
			title: 'link.label',
			internal: 'link.internal.metadata.slug.current',
			external: 'link.external',
			params: 'link.params',
		},
		prepare: ({ title, internal, external, params }) => ({
			title,
			subtitle: [
				external || (internal && (internal === 'index' ? '/' : `/${internal}`)),
				params,
			]
				.filter(Boolean)
				.join(''),
		}),
	},
})
