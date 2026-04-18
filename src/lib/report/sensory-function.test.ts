import { afterEach, describe, expect, it, vi } from 'vitest';

import { handler } from '../../../netlify/functions/sensory.js';

const validPayload = {
	ancestor_name: 'Mary',
	ancestor_birth_year: 1888,
	user_birth_year: 1959,
	inversion_year: 1955
};

afterEach(() => {
	delete process.env.ANTHROPIC_API_KEY;
	vi.unstubAllGlobals();
	vi.restoreAllMocks();
});

describe('sensory function', () => {
	it('rejects non-POST requests', async () => {
		const response = await handler({ httpMethod: 'GET' });

		expect(response.statusCode).toBe(405);
	});

	it('rejects invalid payloads', async () => {
		const response = await handler({ httpMethod: 'POST', body: '{}' });

		expect(response.statusCode).toBe(400);
	});

	it('fails cleanly when the Anthropic key is missing', async () => {
		const response = await handler({
			httpMethod: 'POST',
			body: JSON.stringify(validPayload)
		});

		expect(response.statusCode).toBe(500);
		expect(JSON.parse(response.body)).toEqual({ error: 'Missing ANTHROPIC_API_KEY' });
	});

	it('returns the four generated passages from Anthropic', async () => {
		process.env.ANTHROPIC_API_KEY = 'test-key';
		const fetch = vi.fn().mockResolvedValue(
			new Response(
				JSON.stringify({
					content: [
						{
							type: 'text',
							text: JSON.stringify({
								birth_world: 'Birth world body',
								shared_moment: 'Shared moment body',
								inversion: 'Inversion body',
								beyond: 'Beyond body'
							})
						}
					]
				}),
				{ status: 200, headers: { 'content-type': 'application/json' } }
			)
		);
		vi.stubGlobal('fetch', fetch);

		const response = await handler({
			httpMethod: 'POST',
			body: JSON.stringify(validPayload)
		});

		expect(response.statusCode).toBe(200);
		expect(JSON.parse(response.body)).toEqual({
			birth_world: 'Birth world body',
			shared_moment: 'Shared moment body',
			inversion: 'Inversion body',
			beyond: 'Beyond body'
		});

		const [, request] = fetch.mock.calls[0];
		const parsedRequest = JSON.parse(request.body);
		expect(parsedRequest.model).toBe('claude-haiku-4-5-20251001');
		expect(parsedRequest.max_tokens).toBe(600);
		expect(parsedRequest.messages[0].content).toContain('current_year: 2026');
	});
});
