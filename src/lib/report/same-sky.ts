import { historicalEvents, type HistoricalEvent } from '$lib/data/historical-events';

export type SameSkyInput = {
	userName: string;
	userBirthYear: number;
	ancestorName: string;
	ancestorBirthYear: number;
};

export type SameSkyValidation = {
	valid: boolean;
	errors: string[];
};

export type SameSkyCard = {
	key: 'birth-world' | 'simultaneity' | 'inversion' | 'today';
	title: string;
	body: string;
	year?: number;
	delayMs: number;
};

export type SameSkyReport = {
	input: SameSkyInput;
	stats: {
		yearsBetweenBirths: number;
		ancestorAgeWhenUserWasBorn: number;
		ancestorWouldBeToday: number;
		userAgeNow: number;
	};
	cards: SameSkyCard[];
	timeline: {
		startYear: number;
		endYear: number;
		ancestor: { start: number; end: number };
		user: { start: number; end: number };
		overlap: { start: number; end: number };
		labels: number[];
		usesEstimatedLifespan: boolean;
	};
};

type BuildOptions = {
	currentYear?: number;
};

export type TimelineSegmentMetrics = {
	leftPercent: number;
	widthPercent: number;
};

const TIMELINE_LABEL_MIN_GAP_PERCENT = 8;

const MIN_YEAR = 1800;
const MAX_EVENT_YEAR = historicalEvents[historicalEvents.length - 1]?.year ?? 2020;
const lifeSpanCurve = [
	{ year: 1800, age: 40 },
	{ year: 1840, age: 43 },
	{ year: 1880, age: 48 },
	{ year: 1910, age: 56 },
	{ year: 1940, age: 67 },
	{ year: 1970, age: 73 },
	{ year: 1990, age: 78 },
	{ year: 2020, age: 82 }
] as const;

export function validateSameSkyInput(
	input: SameSkyInput,
	options: BuildOptions = {}
): SameSkyValidation {
	const currentYear = options.currentYear ?? new Date().getFullYear();
	const errors: string[] = [];
	const userName = input.userName.trim();
	const ancestorName = input.ancestorName.trim();

	if (!userName) {
		errors.push('Please enter your name.');
	}

	if (!ancestorName) {
		errors.push("Please enter your ancestor's name.");
	}

	if (
		!Number.isInteger(input.userBirthYear) ||
		input.userBirthYear < MIN_YEAR ||
		input.userBirthYear > currentYear
	) {
		errors.push(`Your birth year must be between ${MIN_YEAR} and ${currentYear}.`);
	}

	if (
		!Number.isInteger(input.ancestorBirthYear) ||
		input.ancestorBirthYear < MIN_YEAR ||
		input.ancestorBirthYear > currentYear
	) {
		errors.push(`Your ancestor's birth year must be between ${MIN_YEAR} and ${currentYear}.`);
	}

	if (
		Number.isInteger(input.userBirthYear) &&
		Number.isInteger(input.ancestorBirthYear) &&
		input.ancestorBirthYear >= input.userBirthYear
	) {
		errors.push('Your ancestor must be born before you.');
	}

	return {
		valid: errors.length === 0,
		errors
	};
}

export function estimateLifeSpan(year: number): number {
	if (year <= lifeSpanCurve[0].year) {
		return lifeSpanCurve[0].age;
	}

	for (let index = 1; index < lifeSpanCurve.length; index += 1) {
		const previous = lifeSpanCurve[index - 1];
		const current = lifeSpanCurve[index];

		if (year <= current.year) {
			const ratio = (year - previous.year) / (current.year - previous.year);
			return Math.round(previous.age + (current.age - previous.age) * ratio);
		}
	}

	return lifeSpanCurve[lifeSpanCurve.length - 1].age;
}

export function getClosestHistoricalEvent(
	targetYear: number
): HistoricalEvent & { isExact: boolean; distance: number } {
	let closest = historicalEvents[0];
	let distance = Math.abs(targetYear - closest.year);

	for (const event of historicalEvents) {
		const nextDistance = Math.abs(targetYear - event.year);
		if (nextDistance < distance || (nextDistance === distance && event.year < closest.year)) {
			closest = event;
			distance = nextDistance;
		}
	}

	return {
		...closest,
		isExact: closest.year === targetYear,
		distance
	};
}

function sentenceFromEvent(targetYear: number): string {
	if (targetYear > MAX_EVENT_YEAR) {
		return 'By then, this first version of Same Sky has moved beyond its historical event list, which is its own reminder of how close their present came to ours.';
	}

	const event = getClosestHistoricalEvent(targetYear);
	if (event.isExact) {
		return event.copy;
	}

	if (event.year < targetYear) {
		return `Around then, ${lowercaseFirst(event.copy)}`;
	}

	return `Just ahead, ${lowercaseFirst(event.copy)}`;
}

function lowercaseFirst(value: string): string {
	return value.slice(0, 1).toLowerCase() + value.slice(1);
}

function formatName(name: string): string {
	return name.trim().replace(/(^|[\s'-])([a-z])/g, (_match, prefix: string, letter: string) => {
		return `${prefix}${letter.toUpperCase()}`;
	});
}

function getTimelineSpan(timeline: SameSkyReport['timeline']): number {
	return Math.max(1, timeline.endYear - timeline.startYear + 1);
}

export function getTimelineYearPercent(year: number, timeline: SameSkyReport['timeline']): number {
	const span = getTimelineSpan(timeline);
	const clampedYear = Math.min(Math.max(year, timeline.startYear), timeline.endYear);

	return ((clampedYear - timeline.startYear) / span) * 100;
}

export function getTimelineSegmentMetrics(
	start: number,
	end: number,
	timeline: SameSkyReport['timeline']
): TimelineSegmentMetrics {
	const span = getTimelineSpan(timeline);
	const clampedStart = Math.min(Math.max(start, timeline.startYear), timeline.endYear);
	const clampedEnd = Math.min(Math.max(end, clampedStart), timeline.endYear);

	return {
		leftPercent: ((clampedStart - timeline.startYear) / span) * 100,
		widthPercent: ((clampedEnd - clampedStart + 1) / span) * 100
	};
}

export function getTimelineVisibleLabels(timeline: SameSkyReport['timeline']): number[] {
	const sorted = [...timeline.labels].sort((left, right) => left - right);

	if (sorted.length <= 2) {
		return sorted;
	}

	const first = sorted[0];
	const last = sorted[sorted.length - 1];
	const visible = [first];

	for (const year of sorted.slice(1, -1)) {
		const yearPercent = getTimelineYearPercent(year, timeline);
		const previousPercent = getTimelineYearPercent(visible[visible.length - 1], timeline);
		const lastPercent = getTimelineYearPercent(last, timeline);

		if (
			yearPercent - previousPercent >= TIMELINE_LABEL_MIN_GAP_PERCENT &&
			lastPercent - yearPercent >= TIMELINE_LABEL_MIN_GAP_PERCENT
		) {
			visible.push(year);
		}
	}

	visible.push(last);

	return visible;
}

function formatYearsOld(age: number): string {
	return age === 1 ? '1 year old' : `${age} years old`;
}

export function buildSameSkyReport(input: SameSkyInput, options: BuildOptions = {}): SameSkyReport {
	const currentYear = options.currentYear ?? new Date().getFullYear();
	const cleanInput = {
		userName: formatName(input.userName),
		userBirthYear: input.userBirthYear,
		ancestorName: formatName(input.ancestorName),
		ancestorBirthYear: input.ancestorBirthYear
	};
	const validation = validateSameSkyInput(cleanInput, { currentYear });

	if (!validation.valid) {
		throw new Error(validation.errors.join(' '));
	}

	const yearsBetweenBirths = cleanInput.userBirthYear - cleanInput.ancestorBirthYear;
	const ancestorAgeWhenUserWasBorn = cleanInput.userBirthYear - cleanInput.ancestorBirthYear;
	const ancestorWouldBeToday = currentYear - cleanInput.ancestorBirthYear;
	const userAgeNow = currentYear - cleanInput.userBirthYear;
	const inversionYear = cleanInput.ancestorBirthYear + userAgeNow;
	const estimatedAncestorEndYear = Math.max(
		cleanInput.userBirthYear,
		cleanInput.ancestorBirthYear + estimateLifeSpan(cleanInput.ancestorBirthYear)
	);
	const timelineEndYear = Math.max(currentYear, estimatedAncestorEndYear);
	const overlapStart = cleanInput.userBirthYear;
	const overlapEnd = Math.max(overlapStart, Math.min(currentYear, estimatedAncestorEndYear));
	const hasBeyondCard = currentYear > estimatedAncestorEndYear;

	const cards: SameSkyCard[] = [
		{
			key: 'birth-world',
			title: `${cleanInput.ancestorName}'s birth world`,
			body: `${cleanInput.ancestorName} was born into a world where ${lowercaseFirst(
				sentenceFromEvent(cleanInput.ancestorBirthYear)
			)}`,
			year: cleanInput.ancestorBirthYear,
			delayMs: 0
		},
		{
			key: 'simultaneity',
			title: 'The same sky moment',
			body: `When you were born, ${cleanInput.ancestorName} was ${formatYearsOld(ancestorAgeWhenUserWasBorn)}. ${sentenceFromEvent(
				cleanInput.userBirthYear
			)}`,
			year: cleanInput.userBirthYear,
			delayMs: 120
		},
		{
			key: 'inversion',
			title: 'Your age in their time',
			body: `${cleanInput.ancestorName} was your exact age now in ${inversionYear}. ${sentenceFromEvent(inversionYear)}`,
			year: inversionYear,
			delayMs: 240
		},
		{
			key: 'today',
			title: hasBeyondCard ? 'Beyond their horizon' : 'Still part of the same world',
			body: hasBeyondCard
				? `Every year you live now is territory ${cleanInput.ancestorName} never walked.`
				: `${cleanInput.ancestorName} is still part of the living world your years belong to, which changes the feeling of the timeline but not the distance between your eras.`,
			year: currentYear,
			delayMs: 360
		}
	];

	return {
		input: cleanInput,
		stats: {
			yearsBetweenBirths,
			ancestorAgeWhenUserWasBorn,
			ancestorWouldBeToday,
			userAgeNow
		},
		cards,
		timeline: {
			startYear: cleanInput.ancestorBirthYear,
			endYear: timelineEndYear,
			ancestor: { start: cleanInput.ancestorBirthYear, end: estimatedAncestorEndYear },
			user: { start: cleanInput.userBirthYear, end: currentYear },
			overlap: { start: overlapStart, end: overlapEnd },
			labels: Array.from(
				new Set([
					cleanInput.ancestorBirthYear,
					cleanInput.userBirthYear,
					estimatedAncestorEndYear,
					currentYear
				])
			).sort((left, right) => left - right),
			usesEstimatedLifespan: true
		}
	};
}
