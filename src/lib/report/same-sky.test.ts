import { describe, expect, it } from 'vitest';

import {
	buildSameSkyReport,
	estimateLifeSpan,
	getClosestHistoricalEvent,
	getTimelineSegmentMetrics,
	getTimelineVisibleLabels,
	validateSameSkyInput
} from './same-sky';

describe('validateSameSkyInput', () => {
	it('rejects missing names and impossible year order', () => {
		const result = validateSameSkyInput(
			{
				userName: '',
				userBirthYear: 1988,
				ancestorName: '',
				ancestorBirthYear: 1995
			},
			{ currentYear: 2026 }
		);

		expect(result.valid).toBe(false);
		expect(result.errors).toContain('Please enter your name.');
		expect(result.errors).toContain("Please enter your ancestor's name.");
		expect(result.errors).toContain('Your ancestor must be born before you.');
	});

	it('accepts a valid pair of birth years', () => {
		const result = validateSameSkyInput(
			{
				userName: 'Mairi',
				userBirthYear: 1992,
				ancestorName: 'Jean',
				ancestorBirthYear: 1931
			},
			{ currentYear: 2026 }
		);

		expect(result.valid).toBe(true);
		expect(result.errors).toHaveLength(0);
	});
});

describe('getClosestHistoricalEvent', () => {
	it('returns an exact event when the year exists', () => {
		const result = getClosestHistoricalEvent(1914);

		expect(result.year).toBe(1914);
		expect(result.isExact).toBe(true);
	});

	it('falls back to the nearest earlier event when distances tie', () => {
		const result = getClosestHistoricalEvent(1916);

		expect(result.year).toBe(1914);
		expect(result.isExact).toBe(false);
	});
});

describe('estimateLifeSpan', () => {
	it('increases across cohorts', () => {
		expect(estimateLifeSpan(1820)).toBeLessThan(estimateLifeSpan(1960));
		expect(estimateLifeSpan(1960)).toBeLessThanOrEqual(90);
	});
});

describe('getTimelineSegmentMetrics', () => {
	it('keeps a same-year overlap visibly wider than zero', () => {
		const report = buildSameSkyReport(
			{
				userName: 'David',
				userBirthYear: 1959,
				ancestorName: 'Mary',
				ancestorBirthYear: 1888
			},
			{ currentYear: 2026 }
		);

		const overlap = getTimelineSegmentMetrics(
			report.timeline.overlap.start,
			report.timeline.overlap.end,
			report.timeline
		);

		expect(report.timeline.overlap.start).toBe(1959);
		expect(report.timeline.overlap.end).toBe(1959);
		expect(overlap.widthPercent).toBeGreaterThan(0);
		expect(overlap.leftPercent + overlap.widthPercent).toBeLessThanOrEqual(100);
	});
});

describe('getTimelineVisibleLabels', () => {
	it('drops labels that would collide in close-year timelines', () => {
		const report = buildSameSkyReport(
			{
				userName: 'Anna',
				userBirthYear: 2020,
				ancestorName: 'Jean',
				ancestorBirthYear: 2019
			},
			{ currentYear: 2026 }
		);

		expect(getTimelineVisibleLabels(report.timeline)).toEqual([2019, 2026, 2101]);
	});
});

describe('buildSameSkyReport', () => {
	it('builds the expected cards and timeline metrics', () => {
		const report = buildSameSkyReport(
			{
				userName: 'Eilidh',
				userBirthYear: 1990,
				ancestorName: 'Margaret',
				ancestorBirthYear: 1930
			},
			{ currentYear: 2026 }
		);

		expect(report.stats.yearsBetweenBirths).toBe(60);
		expect(report.stats.ancestorAgeWhenUserWasBorn).toBe(60);
		expect(report.stats.ancestorWouldBeToday).toBe(96);
		expect(report.cards).toHaveLength(4);
		expect(report.cards[1].title).toBe('When your worlds met');
		expect(report.cards[1].body).toContain('Margaret was 60 years old');
		expect(report.cards[2].body).toContain('1966');
		expect(report.timeline.overlap.start).toBe(1990);
		expect(report.timeline.overlap.end).toBeGreaterThanOrEqual(1990);
		expect(report.timeline.usesEstimatedLifespan).toBe(true);
	});

	it('capitalises report names for headings and card copy', () => {
		const report = buildSameSkyReport(
			{
				userName: 'jon',
				userBirthYear: 1990,
				ancestorName: 'meg grant',
				ancestorBirthYear: 1930
			},
			{ currentYear: 2026 }
		);

		expect(report.input.userName).toBe('Jon');
		expect(report.input.ancestorName).toBe('Meg Grant');
		expect(report.cards[0].title).toBe("Meg Grant's birth world");
		expect(report.cards[1].body).toContain('Meg Grant was 60 years old');
		expect(report.cards[3].body).toContain('Meg Grant');
	});

	it('capitalises report names without flattening valid interior capitals', () => {
		const report = buildSameSkyReport(
			{
				userName: 'jon',
				userBirthYear: 1990,
				ancestorName: 'McDonald',
				ancestorBirthYear: 1930
			},
			{ currentYear: 2026 }
		);

		expect(report.input.userName).toBe('Jon');
		expect(report.input.ancestorName).toBe('McDonald');
		expect(report.cards[0].title).toBe("McDonald's birth world");
	});

	it('switches the final card when the ancestor could plausibly still be alive', () => {
		const report = buildSameSkyReport(
			{
				userName: 'Anna',
				userBirthYear: 2005,
				ancestorName: 'Liz',
				ancestorBirthYear: 1960
			},
			{ currentYear: 2026 }
		);

		expect(report.cards[3].body).toContain('still part of the living world');
	});

	it('uses singular wording when the ancestor was 1 year old', () => {
		const report = buildSameSkyReport(
			{
				userName: 'Anna',
				userBirthYear: 2020,
				ancestorName: 'Jean',
				ancestorBirthYear: 2019
			},
			{ currentYear: 2026 }
		);

		expect(report.cards[1].body).toContain('Jean was 1 year old.');
	});

	it('does not reuse the final dataset event as if it were exact for later years', () => {
		const report = buildSameSkyReport(
			{
				userName: 'Anna',
				userBirthYear: 2020,
				ancestorName: 'Jean',
				ancestorBirthYear: 2019
			},
			{ currentYear: 2026 }
		);

		expect(report.cards[2].body).toContain('2025');
		expect(report.cards[2].body).toContain('moved beyond its historical event list');
		expect(report.cards[2].body).not.toContain('pandemic closed doors');
	});
});
