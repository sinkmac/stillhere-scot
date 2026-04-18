import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

describe('family chain page copy and shell', () => {
	it('keeps the shared site nav and the simplified form footer copy', () => {
		const pagePath = path.resolve(import.meta.dirname, '+page.svelte');
		const page = fs.readFileSync(pagePath, 'utf8');

		expect(page).toContain('<SiteHeader activeHref="/family-chain" />');
		expect(page).toContain('No accounts. No storage.');
		expect(page).not.toContain('Pure JavaScript date arithmetic.');
	});
});
