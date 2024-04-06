import BlogRollup from './blog/Rollup'
import ContactForm from './ContactForm'
import EmployeeList from './EmployeeList'
import FAQList from './FAQList'
import HeroCentered from './HeroCentered'
import HeroMain from './HeroMain'
import HeroPostcard from './HeroPostcard'
import UVPList from './UVPList'

export default function Modules({ modules }: { modules?: Sanity.Module[] }) {
	return (
		<>
			{modules?.map((module) => {
				switch (module._type) {
					case 'blog-rollup':
						return <BlogRollup {...module} key={module._key} />
					case 'contact-form':
						return <ContactForm {...module} key={module._key} />
					case 'employee-list':
						return <EmployeeList {...module} key={module._key} />
					case 'faq-list':
						return <FAQList {...module} key={module._key} />
					case 'hero.centered':
						return <HeroCentered {...module} key={module._key} />
					case 'hero.main':
						return <HeroMain {...module} key={module._key} />
					case 'hero.postcard':
						return <HeroPostcard {...module} key={module._key} />
					case 'uvp-list':
						return <UVPList {...module} key={module._key} />

					default:
						return <div data-type={module._type} key={module._key} />
				}
			})}
		</>
	)
}
