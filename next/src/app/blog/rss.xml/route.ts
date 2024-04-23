import RSS from 'rss'
import { fetchSanity } from '@/lib/sanity'
import groq from 'groq'
import processUrl from '@/lib/processUrl'

export async function GET() {
	const { blog, posts } = await fetchSanity<{
		blog: Sanity.Page
		posts: Sanity.BlogPost[]
	}>(
		groq`{
			'blog': *[_type == 'page' && metadata.slug.current == 'blog'][0]{
				_type,
				title,
				metadata
			},
			'posts': *[_type == 'blog.post']{
				_type,
				publishDate,
				metadata,
				'image': metadata.image.asset->url
			}
		}`,
		{ tags: ['blog-rss'] },
	)

	const url = processUrl(blog)

	const feed = new RSS({
		title: blog.title,
		site_url: url,
		feed_url: `${url}/rss.xml`,
		language: 'ja',
	})

	posts.map((post) =>
		feed.item({
			title: post.metadata.title,
			url: processUrl(post),
			date: post.publishDate,
			description: post.metadata.description,
			enclosure: {
				url: post.image,
			},
		}),
	)

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/atom+xml',
		},
	})
}
