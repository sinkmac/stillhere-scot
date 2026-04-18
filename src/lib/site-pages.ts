export const footerLinks = [
	{ href: '/about', label: 'About' },
	{ href: '/privacy', label: 'Privacy' }
] as const;

export const aboutPage = {
	title: 'Where this came from',
	paragraphs: [
		"Still Here began with a trip to Register House in Edinburgh, a reel of microfiche, and the realisation that the archive existed — but the person didn't.",
		'We found names on records and dates on certificates. Everything official that needed to exist, existed. But there was no sense at all of who these people actually were. How they sounded. What they worried about. What their lives felt like from the inside.',
		"That gap — between the record and the person — is what Still Here exists to close. Not for the past, which is gone. For the future, which isn't.",
		'Still Here makes sure they know who she actually was.',
		'Still Here is built by AI Scotland Productions, Kirriemuir, Angus. Est. 2026.'
	],
	contactEmail: 'sinclair.mclay@gmail.com'
} as const;

export const privacyPage = {
	title: 'Privacy Policy',
	lastUpdated: 'Last updated: April 2026',
	sections: [
		{
			heading: 'What we collect',
			body: 'Still Here Phase 1 collects no personal data. There are no accounts, no login, no storage of names or birth years entered into the tool. All calculations happen in your browser and nothing is sent to our servers.'
		},
		{
			heading: 'Cookies',
			body: 'This site may use cookies for anonymous analytics and advertising purposes. You can disable cookies in your browser settings at any time.'
		},
		{
			heading: 'Third party services',
			body: "This site is hosted on Netlify. We may in future display advertisements served by Google AdSense. Google's privacy policy applies to any data collected through those services."
		},
		{
			heading: 'Contact',
			body: 'If you have any questions about this privacy policy, contact us at sinclair.mclay@gmail.com'
		}
	]
} as const;
