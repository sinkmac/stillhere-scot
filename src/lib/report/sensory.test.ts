import { describe, expect, it } from 'vitest';

import { buildSameSkyReport } from './same-sky';
import {
	applySensoryCopy,
	buildSensoryPayload,
	buildSensoryUserMessage,
	isSensoryCopy,
	SENSORY_CURRENT_YEAR,
	SENSORY_SYSTEM_PROMPT
} from './sensory';

describe('buildSensoryPayload', () => {
	it('derives the API payload from a same sky report', () => {
		const report = buildSameSkyReport(
			{
				userName: 'David',
				userBirthYear: 1959,
				ancestorName: 'Mary',
				ancestorBirthYear: 1888
			},
			{ currentYear: 2026 }
		);

		expect(buildSensoryPayload(report)).toEqual({
			ancestor_name: 'Mary',
			ancestor_birth_year: 1888,
			user_birth_year: 1959,
			inversion_year: 1955
		});
	});
});

describe('buildSensoryUserMessage', () => {
	it('matches the briefed message format', () => {
		expect(
			buildSensoryUserMessage({
				ancestor_name: 'Mary',
				ancestor_birth_year: 1888,
				user_birth_year: 1959,
				inversion_year: 1955
			})
		).toBe(
			'ancestor_name: Mary\n' +
				'ancestor_birth_year: 1888\n' +
				'user_birth_year: 1959\n' +
				`current_year: ${SENSORY_CURRENT_YEAR}\n` +
				'inversion_year: 1955\n\n' +
				"Generate the four atmospheric passages for this ancestor's report."
		);
	});

	it('keeps the system prompt wording locked', () => {
		expect(SENSORY_SYSTEM_PROMPT).toContain(
			'You are a historical atmosphere writer for Still Here, a family memory tool.'
		);
		expect(SENSORY_SYSTEM_PROMPT).toContain(
			'Return ONLY a valid JSON object with exactly these four keys — nothing else'
		);
	});
});

describe('applySensoryCopy', () => {
	it('replaces only the body text and preserves titles, years, and timing', () => {
		const report = buildSameSkyReport(
			{
				userName: 'Eilidh',
				userBirthYear: 1990,
				ancestorName: 'Margaret',
				ancestorBirthYear: 1930
			},
			{ currentYear: 2026 }
		);

		const upgraded = applySensoryCopy(report, {
			birth_world: 'Birth world body',
			shared_moment: 'Shared moment body',
			inversion: 'Inversion body',
			beyond: 'Beyond body'
		});

		expect(upgraded.cards.map((card) => card.body)).toEqual([
			'Birth world body',
			'Shared moment body',
			'Inversion body',
			'Beyond body'
		]);
		expect(upgraded.cards.map((card) => card.title)).toEqual(
			report.cards.map((card) => card.title)
		);
		expect(upgraded.cards.map((card) => card.year)).toEqual(report.cards.map((card) => card.year));
		expect(upgraded.cards.map((card) => card.delayMs)).toEqual(
			report.cards.map((card) => card.delayMs)
		);
	});
});

describe('isSensoryCopy', () => {
	it('accepts only the exact four string keys', () => {
		expect(
			isSensoryCopy({
				birth_world: 'a',
				shared_moment: 'b',
				inversion: 'c',
				beyond: 'd'
			})
		).toBe(true);

		expect(
			isSensoryCopy({
				birth_world: 'a',
				shared_moment: 'b',
				inversion: 'c'
			})
		).toBe(false);

		expect(
			isSensoryCopy({
				birth_world: 'a',
				shared_moment: 'b',
				inversion: 'c',
				beyond: 4
			})
		).toBe(false);
	});
});
