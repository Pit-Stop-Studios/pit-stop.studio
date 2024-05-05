import { singleton } from './utils'
import { orderableDocumentListDeskItem as orderable } from '@sanity/orderable-document-list'
import type { StructureResolver } from 'sanity/structure'

import { VscAccount, VscServerProcess } from 'react-icons/vsc'

const structure: StructureResolver = (S, context) =>
	S.list()
		.title('Content')
		.items([
			singleton(S, 'Site', 'site').icon(VscServerProcess),
			S.documentTypeListItem('navigation'),
			S.documentTypeListItem('redirect').title('Redirects'),
			S.divider(),

			S.documentTypeListItem('page').title('Pages'),
			S.divider(),

			S.documentTypeListItem('blog.post').title('Blog posts'),
			S.documentTypeListItem('blog.category').title('Blog categories'),
			S.divider(),

			orderable({
				type: 'employee',
				title: 'Employees',
				icon: VscAccount,
				S,
				context,
			}),
			S.documentTypeListItem('case-study').title('Case Studies'),
			S.documentTypeListItem('callout').title('Callouts'),
		])

export default structure
