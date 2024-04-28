import { VscEdit, VscEye } from 'react-icons/vsc'
import { isDev, type SanityDocument } from 'sanity'
import { Iframe } from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/structure'

const previewUrl = 'https://pit-stop.studio'

const defaultDocumentNode: DefaultDocumentNodeResolver = (
	S,
	{ schemaType },
) => {
	const editorView = S.view.form().icon(VscEdit)

	switch (schemaType) {
		case 'page':
		case 'blog.post':
		case 'employee':
			return S.document().views([
				editorView,
				S.view
					.component(Iframe)
					.title('Preview')
					.icon(VscEye)
					.options({
						url: (
							doc: SanityDocument & {
								metadata?: { slug?: { current: string } }
							},
						) => {
							const base = isDev ? 'http://localhost:3000' : previewUrl

							const slug = doc?.metadata?.slug?.current
							const path = slug === 'index' ? '' : slug
							const directory =
								schemaType === 'blog.post'
									? 'blog'
									: schemaType === 'employee'
										? 'employee'
										: null

							return [base, directory, path].filter(Boolean).join('/')
						},
						reload: {
							button: true,
						},
					}),
			])

		default:
			return S.document().views([editorView])
	}
}

export default defaultDocumentNode
