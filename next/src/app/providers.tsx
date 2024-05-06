'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
		api_host: '/ingest',
		ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
		capture_pageview: false, // Disable automatic pageview capture, as we capture manually
		capture_pageleave: true,
	})
}

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
	return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
