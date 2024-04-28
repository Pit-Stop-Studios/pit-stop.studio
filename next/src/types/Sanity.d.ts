import type { SanityDocument } from 'next-sanity'
import type { SanityImageObject } from '@sanity/image-url/lib/types/types'

declare global {
	namespace Sanity {
		// documents

		type Site = SanityDocument & {
			title: string
			description: string
			headerMenu?: Navigation
			ctas?: CTA[]
			footerMenu?: Navigation
			logo: Image
		}

		type Navigation = SanityDocument & {
			title: string
			items?: (Link | LinkList)[]
		}

		type PageBase = SanityDocument & {
			title?: string
			metadata: Metadata
		}

		type Page = PageBase & {
			readonly _type: 'page'
			modules?: Module[]
		}

		type BlogPost = PageBase & {
			readonly _type: 'blog.post'
			body: any
			readTime: number
			headings?: { style: string; text: string }[]
			categories: BlogCategory[]
			author: Employee
			publishDate: string
		}

		type BlogCategory = SanityDocument & {
			title: string
			slug: { current: string }
		}

		type Employee = PageBase & {
			name: string
			title: string
			content?: any
			description?: string
			image: Image
		}

		type CaseStudy = PageBase & {
			url: string
		}

		type Callout = SanityDocument & {
			title: string
			content: any
			ctas?: CTA[]
			image?: Image
		}

		// objects

		type CTA = {
			link?: Link
			style?: string
		}

		type Image = SanityImageObject &
			Partial<{
				alt: string
				caption: string
				source: string
			}>

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
			ogimage?: string
			noIndex?: boolean
		}

		type Module = {
			_type: string
			_key: string
		}
	}
}

export {}
