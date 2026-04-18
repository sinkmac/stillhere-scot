import { describe, expect, it } from 'vitest';

import { toolNavigationLinks } from './site-navigation';

describe('tool navigation links', () => {
	it('keeps the home link branded as Still Here alongside Family Chain', () => {
		expect(toolNavigationLinks).toEqual([
			{ href: '/', label: 'Still Here' },
			{ href: '/family-chain', label: 'The Family Chain' }
		]);
	});
});
