import Header from '@/ui/header'
import Footer from '@/ui/footer'
import dynamic from 'next/dynamic'
import { CSPostHogProvider } from '@/app/providers'
import { GoogleTagManager } from '@next/third-parties/google'
import '@/styles/app.css'

const PostHogPageView = dynamic(() => import('@/lib/PostHogPageView'), {
	ssr: false,
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<CSPostHogProvider>
				<body className="bg-canvas">
					<PostHogPageView />
					<Header />
					{children}
					<Footer />
				</body>
			</CSPostHogProvider>
			<GoogleTagManager gtmId="GTM-5JD6F3WF" />
		</html>
	)
}
