import {
	buildSensoryUserMessage,
	isSensoryCopy,
	SENSORY_MAX_TOKENS,
	SENSORY_MODEL,
	SENSORY_SYSTEM_PROMPT
} from '../../src/lib/report/sensory.ts';

/**
 * @param {number} statusCode
 * @param {unknown} body
 */
function json(statusCode, body) {
	return {
		statusCode,
		headers: {
			'content-type': 'application/json; charset=utf-8'
		},
		body: JSON.stringify(body)
	};
}

/**
 * @param {string | undefined} body
 */
function parsePayload(body) {
	if (!body) {
		return null;
	}

	let parsed;

	try {
		parsed = JSON.parse(body);
	} catch {
		return null;
	}

	if (!parsed || typeof parsed !== 'object') {
		return null;
	}

	const payload = parsed;
	if (
		typeof payload.ancestor_name !== 'string' ||
		!payload.ancestor_name.trim() ||
		!Number.isInteger(payload.ancestor_birth_year) ||
		!Number.isInteger(payload.user_birth_year) ||
		!Number.isInteger(payload.inversion_year)
	) {
		return null;
	}

	return {
		ancestor_name: payload.ancestor_name.trim(),
		ancestor_birth_year: payload.ancestor_birth_year,
		user_birth_year: payload.user_birth_year,
		inversion_year: payload.inversion_year
	};
}

/**
 * @param {{ content?: Array<{ type?: string, text?: string }> } | null | undefined} responseBody
 * @returns {string}
 */
function extractAnthropicText(responseBody) {
	if (!responseBody || typeof responseBody !== 'object' || !Array.isArray(responseBody.content)) {
		throw new Error('Anthropic response missing content');
	}

	const textBlock = responseBody.content.find(
		(block) =>
			block && typeof block === 'object' && block.type === 'text' && typeof block.text === 'string'
	);

	if (!textBlock) {
		throw new Error('Anthropic response missing text block');
	}

	const { text } = textBlock;
	if (typeof text !== 'string') {
		throw new Error('Anthropic text block was not a string');
	}

	return text;
}

/**
 * @param {string} text
 */
function parseSensoryCopy(text) {
	const trimmed = text.trim();
	const withoutFence = trimmed.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
	const objectStart = withoutFence.indexOf('{');
	const objectEnd = withoutFence.lastIndexOf('}');

	if (objectStart === -1 || objectEnd === -1 || objectEnd < objectStart) {
		throw new Error('Anthropic text did not contain a JSON object');
	}

	return JSON.parse(withoutFence.slice(objectStart, objectEnd + 1));
}

/**
 * @param {unknown} value
 * @returns {{ birth_world: string, shared_moment: string, inversion: string, beyond: string }}
 */
function normalizeSensoryCopy(value) {
	if (!value || typeof value !== 'object') {
		throw new Error('Anthropic response shape was invalid');
	}

	const candidate =
		/** @type {{ birth_world?: unknown, shared_moment?: unknown, inversion?: unknown, beyond?: unknown }} */ (
			value
		);
	const birth_world = candidate.birth_world;
	const shared_moment = candidate.shared_moment;
	const inversion = candidate.inversion;
	const beyond = candidate.beyond;

	if (
		typeof birth_world !== 'string' ||
		typeof shared_moment !== 'string' ||
		typeof inversion !== 'string' ||
		typeof beyond !== 'string'
	) {
		console.error('sensory normalize candidate', JSON.stringify(candidate));
		throw new Error('Anthropic response shape was invalid');
	}

	return { birth_world, shared_moment, inversion, beyond };
}

/**
 * @param {{ httpMethod?: string, body?: string }} event
 */
export async function handler(event) {
	if (event.httpMethod !== 'POST') {
		return json(405, { error: 'Method Not Allowed' });
	}

	const payload = parsePayload(event.body);
	if (!payload) {
		return json(400, { error: 'Invalid payload' });
	}

	const apiKey = process.env.ANTHROPIC_API_KEY;
	if (!apiKey) {
		return json(500, { error: 'Missing ANTHROPIC_API_KEY' });
	}

	try {
		const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'x-api-key': apiKey,
				'anthropic-version': '2023-06-01'
			},
			body: JSON.stringify({
				model: SENSORY_MODEL,
				max_tokens: SENSORY_MAX_TOKENS,
				system: SENSORY_SYSTEM_PROMPT,
				messages: [
					{
						role: 'user',
						content: buildSensoryUserMessage(payload)
					}
				]
			})
		});

		if (!anthropicResponse.ok) {
			throw new Error(`Anthropic request failed with status ${anthropicResponse.status}`);
		}

		const anthropicBody = await anthropicResponse.json();
		const sensory = normalizeSensoryCopy(parseSensoryCopy(extractAnthropicText(anthropicBody)));

		if (!isSensoryCopy(sensory)) {
			throw new Error('Anthropic response shape was invalid');
		}

		return json(200, sensory);
	} catch (error) {
		console.error('sensory function failed', error);
		return json(500, { error: 'Failed to generate sensory copy' });
	}
}
