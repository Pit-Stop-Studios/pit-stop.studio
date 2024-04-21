import { defineField, defineType } from 'sanity'
import { TbLanguageHiragana } from 'react-icons/tb'

export default defineType({
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
})
