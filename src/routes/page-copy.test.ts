import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

describe('same sky page copy', () => {
	it('locks the visual timeline heading copy', () => {
		const pagePath = path.resolve(import.meta.dirname, '+page.svelte');
		const page = fs.readFileSync(pagePath, 'utf8');

		expect(page).toContain('The overlap');
		expect(page).not.toContain('The stretch of years you can hold together');
	});
});
