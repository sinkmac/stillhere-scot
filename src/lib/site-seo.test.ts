import { describe, expect, it } from 'vitest';

import { siteSeo } from './site-seo';

describe('site seo defaults', () => {
	it('locks the required global title and descriptions', () => {
		expect(siteSeo.title).toBe('Still Here — Same Sky');
		expect(siteSeo.description).toBe(
			"Enter two birth years. Discover the emotional and historical distance between your life and your ancestor's. A free tool from AI Scotland Productions."
		);
		expect(siteSeo.ogDescription).toBe(
			'Enter two birth years. Discover how close the past really is.'
		);
	});

	it('locks the required canonical, robots, and og defaults', () => {
		expect(siteSeo.url).toBe('https://stillhere.scot');
		expect(siteSeo.ogImage).toBe('https://stillhere.scot/og-image.svg');
		expect(siteSeo.robots).toBe('index, follow');
		expect(siteSeo.ogType).toBe('website');
	});
});
