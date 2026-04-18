import { describe, expect, it } from 'vitest';

import { buildFamilyChainReport, validateFamilyChainInput } from './family-chain';

describe('validateFamilyChainInput', () => {
	it('rejects missing names and out-of-order generations', () => {
		const result = validateFamilyChainInput(
			{
				userName: '',
				userBirthYear: 1988,
				parentName: '',
				parentBirthYear: 1995,
				grandparentName: '',
				grandparentBirthYear: 1970
			},
			{ currentYear: 2026 }
		);

		expect(result.valid).toBe(false);
		expect(result.errors).toContain('Please enter your name.');
		expect(result.errors).toContain("Please enter your parent's name.");
		expect(result.errors).toContain("Please enter your grandparent's name.");
		expect(result.errors).toContain(
			'Your grandparent must be born before your parent, and your parent must be born before you.'
		);
	});

	it('accepts a valid three-generation chain', () => {
		const result = validateFamilyChainInput(
			{
				userName: 'Eilidh',
				userBirthYear: 2000,
				parentName: 'Moira',
				parentBirthYear: 1975,
				grandparentName: 'Jean',
				grandparentBirthYear: 1950
			},
			{ currentYear: 2026 }
		);

		expect(result.valid).toBe(true);
		expect(result.errors).toHaveLength(0);
	});
});

describe('buildFamilyChainReport', () => {
	it('calculates shared years and remaining three-generation window', () => {
		const report = buildFamilyChainReport(
			{
				userName: 'Eilidh',
				userBirthYear: 2000,
				parentName: 'Moira',
				parentBirthYear: 1975,
				grandparentName: 'Jean',
				grandparentBirthYear: 1950
			},
			{ currentYear: 2026 }
		);

		expect(report.sharedYears.withGrandparent).toBe(26);
		expect(report.sharedYears.withParent).toBe(26);
		expect(report.sharedYears.allThree).toBe(26);
		expect(report.window.remainingYears).toBe(5);
		expect(report.cards[0].body).toBe('Eilidh and Jean have shared 26 years so far.');
		expect(report.cards[1].body).toBe('Eilidh and Moira have shared 26 years so far.');
		expect(report.cards[2].body).toBe(
			'There have been 26 years when all three of you were alive at the same time.'
		);
		expect(report.cards[3].body).toBe(
			'Based on average life expectancy, you have approximately 5 years left where all three of you are alive at the same time.'
		);
	});

	it('switches the final card when the grandparent would already be past 81', () => {
		const report = buildFamilyChainReport(
			{
				userName: 'Eilidh',
				userBirthYear: 2000,
				parentName: 'Moira',
				parentBirthYear: 1970,
				grandparentName: 'Jean',
				grandparentBirthYear: 1940
			},
			{ currentYear: 2026 }
		);

		expect(report.sharedYears.withGrandparent).toBe(21);
		expect(report.sharedYears.allThree).toBe(21);
		expect(report.window.remainingYears).toBe(0);
		expect(report.window.hasClosed).toBe(true);
		expect(report.cards[3].body).toBe(
			'Jean is no longer with us, but you shared 21 years together.'
		);
	});
});
