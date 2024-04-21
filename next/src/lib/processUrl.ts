import { BASE_URL } from './env'

export default function ({
	_type,
	metadata,
}: Sanity.Page | Sanity.BlogPost | Sanity.Employee) {
	const directory =
		_type === 'blog.post' ? 'blog' : _type === 'employee' ? 'employee' : null

	const slug = metadata.slug.current
	const path = slug === 'index' ? null : slug

	return [BASE_URL, directory, path].filter(Boolean).join('/')
}
