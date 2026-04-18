import type { SameSkyReport } from './same-sky';

export type SensoryPayload = {
	ancestor_name: string;
	ancestor_birth_year: number;
	user_birth_year: number;
	inversion_year: number;
};

export type SensoryCopy = {
	birth_world: string;
	shared_moment: string;
	inversion: string;
	beyond: string;
};

export const SENSORY_CURRENT_YEAR = 2026;
export const SENSORY_MODEL = 'claude-haiku-4-5-20251001';
export const SENSORY_MAX_TOKENS = 600;
export const SENSORY_SYSTEM_PROMPT = `You are a historical atmosphere writer for Still Here, a family memory tool.

You will be given a person's name, birth year, and the current year.

Your job is to write four short atmospheric passages — one for each of the four report cards. Each passage must make the reader feel what it was like to be alive in that year, not just know what happened.

Rules:
- Write in second person directed at the ancestor: "She was born into a world where..." or use their name
- Each passage is 2-3 sentences maximum
- Focus on sensory and emotional texture: light, smell, sound, the rhythm of daily life, what people feared, what felt modern, what felt permanent
- Include music where it fits naturally — what was in the air, what people sang, what was on the radio. For years before the UK charts (pre-1952), describe the musical texture of the era: music hall, hymns, folk, dance band. For 1952 onwards, you may reference what was dominating the charts or the airwaves that year — but only include specific song or artist names if you are certain they are accurate. If uncertain, describe the sound and feeling of the music instead
- Draw on social history, not political history — ordinary life, not headlines
- Be specific to the decade and the likely social class of an ordinary Scottish or British person
- Never mention Jack the Ripper, wars as abstract events, or political figures unless they directly touched ordinary daily life
- Warm, intimate, slightly melancholy tone — like a good historical novelist
- No clichés: never use "simpler times", "hard but honest", "before the internet"
- No preamble, numbering, labels, or explanation
- Return ONLY a valid JSON object with exactly these four keys — nothing else

{
  "birth_world": "2-3 sentence atmospheric passage about the world when the ancestor was born",
  "shared_moment": "2-3 sentence passage about what life felt like in the year the user was born, from the ancestor's perspective at that age",
  "inversion": "2-3 sentence passage about what the world felt and smelled and sounded like in the inversion year",
  "beyond": "2-3 sentence passage about what the ancestor never got to see or feel — the world that came after them"
}`;

export function buildSensoryPayload(report: SameSkyReport): SensoryPayload {
	return {
		ancestor_name: report.input.ancestorName,
		ancestor_birth_year: report.input.ancestorBirthYear,
		user_birth_year: report.input.userBirthYear,
		inversion_year: report.input.ancestorBirthYear + report.stats.userAgeNow
	};
}

export function buildSensoryUserMessage(payload: SensoryPayload): string {
	return [
		`ancestor_name: ${payload.ancestor_name}`,
		`ancestor_birth_year: ${payload.ancestor_birth_year}`,
		`user_birth_year: ${payload.user_birth_year}`,
		`current_year: ${SENSORY_CURRENT_YEAR}`,
		`inversion_year: ${payload.inversion_year}`,
		'',
		"Generate the four atmospheric passages for this ancestor's report."
	].join('\n');
}

export function isSensoryCopy(value: unknown): value is SensoryCopy {
	if (!value || typeof value !== 'object') {
		return false;
	}

	const candidate = value as Record<string, unknown>;
	const keys = Object.keys(candidate).sort();

	return (
		keys.length === 4 &&
		keys.join('|') === 'beyond|birth_world|inversion|shared_moment' &&
		typeof candidate.birth_world === 'string' &&
		typeof candidate.shared_moment === 'string' &&
		typeof candidate.inversion === 'string' &&
		typeof candidate.beyond === 'string'
	);
}

export function applySensoryCopy(report: SameSkyReport, sensory: SensoryCopy): SameSkyReport {
	return {
		...report,
		cards: report.cards.map((card) => {
			if (card.key === 'birth-world') {
				return { ...card, body: sensory.birth_world };
			}

			if (card.key === 'simultaneity') {
				return { ...card, body: sensory.shared_moment };
			}

			if (card.key === 'inversion') {
				return { ...card, body: sensory.inversion };
			}

			return { ...card, body: sensory.beyond };
		})
	};
}
