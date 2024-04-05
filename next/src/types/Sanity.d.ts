import type { SanityDocument, SanityImageAssetDocument } from 'next-sanity'

declare global {
	namespace Sanity {
		// documents

		type Site = SanityDocument & {
			title: string
			menu?: (Link | LinkList)[]
			logo: Image
		}

		type Page = SanityDocument & {
			_type
			page
			title: string
			modules?: Module[]
			metadata: Metadata
		}

		type BlogPost = SanityDocument & {
			readonly _type: 'blog.post'
			body: any
			readTime: number
			categories: BlogCategory[]
			author: Employee
			publishDate: string
			metadata: Metadata
		}

		type BlogCategory = SanityDocument & {
			title: string
		}

		type Employee = SanityDocument & {
			name: string
			title: string
			image: Image
		}

		// objects

		type CTA = {
			link?: Link
			style?: string
		}

		type Image = SanityImageAssetDocument & {
			alt?: string
		}

		type Link = {
			readonly _type: 'link'
			label: string
			type: 'internal' | 'external'
			internal?: Page | BlogPost
			external?: string
			params?: string
		}

		type LinkList = {
			readonly _type: 'link.list'
			label: string
			links?: Link[]
		}

		type Metadata = {
			title: string
			description: string
			slug: { current: string }
			image?: Image
		}

		type Module = {
			_type: string
			_key: string
		}
	}
}

export {}
