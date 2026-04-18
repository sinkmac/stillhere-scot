export type FamilyChainInput = {
	userName: string;
	userBirthYear: number;
	parentName: string;
	parentBirthYear: number;
	grandparentName: string;
	grandparentBirthYear: number;
};

export type FamilyChainValidation = {
	valid: boolean;
	errors: string[];
};

export type FamilyChainCard = {
	key: 'grandparent' | 'parent' | 'all-three' | 'window';
	title: string;
	body: string;
	delayMs: number;
};

export type FamilyChainReport = {
	input: FamilyChainInput;
	sharedYears: {
		withGrandparent: number;
		withParent: number;
		allThree: number;
	};
	window: {
		remainingYears: number;
		hasClosed: boolean;
		estimatedEndYears: {
			user: number;
			parent: number;
			grandparent: number;
		};
	};
	cards: FamilyChainCard[];
};

type BuildOptions = {
	currentYear?: number;
};

const MIN_YEAR = 1800;
export const FAMILY_CHAIN_LIFE_EXPECTANCY = 81;

export function validateFamilyChainInput(
	input: FamilyChainInput,
	options: BuildOptions = {}
): FamilyChainValidation {
	const currentYear = options.currentYear ?? new Date().getFullYear();
	const errors: string[] = [];
	const userName = input.userName.trim();
	const parentName = input.parentName.trim();
	const grandparentName = input.grandparentName.trim();

	if (!userName) {
		errors.push('Please enter your name.');
	}

	if (!parentName) {
		errors.push("Please enter your parent's name.");
	}

	if (!grandparentName) {
		errors.push("Please enter your grandparent's name.");
	}

	if (
		!Number.isInteger(input.userBirthYear) ||
		input.userBirthYear < MIN_YEAR ||
		input.userBirthYear > currentYear
	) {
		errors.push(`Your birth year must be between ${MIN_YEAR} and ${currentYear}.`);
	}

	if (
		!Number.isInteger(input.parentBirthYear) ||
		input.parentBirthYear < MIN_YEAR ||
		input.parentBirthYear > currentYear
	) {
		errors.push(`Your parent's birth year must be between ${MIN_YEAR} and ${currentYear}.`);
	}

	if (
		!Number.isInteger(input.grandparentBirthYear) ||
		input.grandparentBirthYear < MIN_YEAR ||
		input.grandparentBirthYear > currentYear
	) {
		errors.push(`Your grandparent's birth year must be between ${MIN_YEAR} and ${currentYear}.`);
	}

	if (
		Number.isInteger(input.userBirthYear) &&
		Number.isInteger(input.parentBirthYear) &&
		Number.isInteger(input.grandparentBirthYear) &&
		!(
			input.grandparentBirthYear < input.parentBirthYear &&
			input.parentBirthYear < input.userBirthYear
		)
	) {
		errors.push(
			'Your grandparent must be born before your parent, and your parent must be born before you.'
		);
	}

	return {
		valid: errors.length === 0,
		errors
	};
}

function formatName(name: string): string {
	return name.trim();
}

function pluralizeYears(years: number): string {
	return years === 1 ? '1 year' : `${years} years`;
}

function calculateSharedYears(startYear: number, endYear: number): number {
	return Math.max(0, endYear - startYear);
}

export function buildFamilyChainReport(
	input: FamilyChainInput,
	options: BuildOptions = {}
): FamilyChainReport {
	const currentYear = options.currentYear ?? new Date().getFullYear();
	const cleanInput = {
		userName: formatName(input.userName),
		userBirthYear: input.userBirthYear,
		parentName: formatName(input.parentName),
		parentBirthYear: input.parentBirthYear,
		grandparentName: formatName(input.grandparentName),
		grandparentBirthYear: input.grandparentBirthYear
	};
	const validation = validateFamilyChainInput(cleanInput, { currentYear });

	if (!validation.valid) {
		throw new Error(validation.errors.join(' '));
	}

	const estimatedEndYears = {
		user: cleanInput.userBirthYear + FAMILY_CHAIN_LIFE_EXPECTANCY,
		parent: cleanInput.parentBirthYear + FAMILY_CHAIN_LIFE_EXPECTANCY,
		grandparent: cleanInput.grandparentBirthYear + FAMILY_CHAIN_LIFE_EXPECTANCY
	};
	const currentSharedEnd = Math.min(
		currentYear,
		estimatedEndYears.user,
		estimatedEndYears.parent,
		estimatedEndYears.grandparent
	);
	const withGrandparent = calculateSharedYears(
		cleanInput.userBirthYear,
		Math.min(currentYear, estimatedEndYears.user, estimatedEndYears.grandparent)
	);
	const withParent = calculateSharedYears(
		cleanInput.userBirthYear,
		Math.min(currentYear, estimatedEndYears.user, estimatedEndYears.parent)
	);
	const allThree = calculateSharedYears(cleanInput.userBirthYear, currentSharedEnd);
	const remainingYears = Math.max(
		0,
		Math.min(estimatedEndYears.user, estimatedEndYears.parent, estimatedEndYears.grandparent) -
			currentYear
	);
	const hasClosed = currentYear - cleanInput.grandparentBirthYear > FAMILY_CHAIN_LIFE_EXPECTANCY;

	return {
		input: cleanInput,
		sharedYears: {
			withGrandparent,
			withParent,
			allThree
		},
		window: {
			remainingYears,
			hasClosed,
			estimatedEndYears
		},
		cards: [
			{
				key: 'grandparent',
				title: 'You and your grandparent',
				body: `${cleanInput.userName} and ${cleanInput.grandparentName} have shared ${pluralizeYears(withGrandparent)} so far.`,
				delayMs: 0
			},
			{
				key: 'parent',
				title: 'You and your parent',
				body: `${cleanInput.userName} and ${cleanInput.parentName} have shared ${pluralizeYears(withParent)} so far.`,
				delayMs: 90
			},
			{
				key: 'all-three',
				title: 'All three of you',
				body: `There have been ${pluralizeYears(allThree)} when all three of you were alive at the same time.`,
				delayMs: 180
			},
			{
				key: 'window',
				title: 'The window',
				body: hasClosed
					? `${cleanInput.grandparentName} is no longer with us, but you shared ${pluralizeYears(withGrandparent)} together.`
					: `Based on average life expectancy, you have approximately ${pluralizeYears(remainingYears)} left where all three of you are alive at the same time.`,
				delayMs: 270
			}
		]
	};
}
