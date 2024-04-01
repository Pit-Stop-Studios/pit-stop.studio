import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import {
	dashboardTool,
	projectInfoWidget,
	projectUsersWidget,
} from '@sanity/dashboard'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import defaultDocumentNode from './src/defaultDocumentNode'
import structure from './src/structure'

const singletonTypes = ['site']

export default defineConfig({
	name: 'default',
	title: 'Pit Stop Studio',
	projectId: 'ejp4p9qf',
	dataset: 'production',

	plugins: [
		structureTool({ defaultDocumentNode, structure }),
		dashboardTool({
			widgets: [
				projectInfoWidget(),
				projectUsersWidget(),
				vercelWidget({
					layout: {
						width: 'auto',
					},
				}),
			],
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
		templates: (templates) =>
			templates.filter(
				({ schemaType }) => !singletonTypes.includes(schemaType),
			),
	},

	document: {
		actions: (input, { schemaType }) =>
			singletonTypes.includes(schemaType)
				? input.filter(
						({ action }) =>
							action &&
							['publish', 'discardChanges', 'restore'].includes(action),
					)
				: input,
	},
})
