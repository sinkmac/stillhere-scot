import { describe, expect, it } from 'vitest';

import { toolNavigationLinks } from './site-navigation';

describe('tool navigation links', () => {
	it('keeps the two Still Here tools in the header nav', () => {
		expect(toolNavigationLinks).toEqual([
			{ href: '/', label: 'Same Sky' },
			{ href: '/family-chain', label: 'The Family Chain' }
		]);
	});
});
