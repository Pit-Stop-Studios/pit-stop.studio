// documents
import site from './documents/site'
import page from './documents/page'
import redirect from './documents/redirect'
import blogPost from './documents/blog.post'
import blogCategory from './documents/blog.category'
import employee from './documents/employee'
import caseStudy from './documents/case-study'
import callout from './documents/callout'

// objects
import cta from './objects/cta'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'

// modules
import blogRollup from './modules/blog-rollup'
import calloutModule from './modules/callout-module'
import caseStudyList from './modules/case-study-list'
import contactForm from './modules/contact-form'
import employeeList from './modules/employee-list'
import faqList from './modules/faq-list'
import heroCentered from './modules/hero.centered'
import heroMain from './modules/hero.main'
import heroPostcard from './modules/hero.postcard'
import uvpList from './modules/uvp-list'

export const schemaTypes = [
	// documents
	site,
	page,
	redirect,
	blogPost,
	blogCategory,
	employee,
	caseStudy,
	callout,

	// objects
	cta,
	link,
	linkList,
	metadata,

	// modules
	blogRollup,
	calloutModule,
	caseStudyList,
	contactForm,
	employeeList,
	faqList,
	heroCentered,
	heroMain,
	heroPostcard,
	uvpList,
]
