import {
	buildSensoryUserMessage,
	isSensoryCopy,
	SENSORY_MAX_TOKENS,
	SENSORY_MODEL,
	SENSORY_SYSTEM_PROMPT
} from '../../src/lib/report/sensory.ts';

function json(statusCode, body) {
	return {
		statusCode,
		headers: {
			'content-type': 'application/json; charset=utf-8'
		},
		body: JSON.stringify(body)
	};
}

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

	return textBlock.text;
}

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
		const sensory = JSON.parse(extractAnthropicText(anthropicBody));

		if (!isSensoryCopy(sensory)) {
			throw new Error('Anthropic response shape was invalid');
		}

		return json(200, sensory);
	} catch (error) {
		console.error('sensory function failed', error);
		return json(500, { error: 'Failed to generate sensory copy' });
	}
}
