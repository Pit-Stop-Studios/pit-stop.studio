import { fetchSanity, groq } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Employee from './Employee'
import processMetadata from '@/lib/processMetadata'

export default async function Page({ params }: Props) {
	const employee = await getEmployee(params)
	if (!employee) notFound()
	return <Employee employee={employee} />
}

export async function generateMetadata({ params }: Props) {
	const employee = await getEmployee(params)
	if (!employee) notFound()
	return processMetadata(employee)
}

async function getEmployee(params: Props['params']) {
	return await fetchSanity<Sanity.Employee>(
		groq`*[_type == 'employee' && metadata.slug.current == $slug][0]{
			...,
			'posts': *[_type == 'blog.post' && references(^._id)]{
				publishDate,
				categories[]->,
				metadata
			}
		}`,
		{
			params,
			tags: ['employees'],
		},
	)
}

type Props = {
	params: { slug?: string }
}
