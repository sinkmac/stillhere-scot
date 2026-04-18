<script lang="ts">
	import { resolve } from '$app/paths';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import {
		buildFamilyChainReport,
		validateFamilyChainInput,
		type FamilyChainReport
	} from '$lib/report/family-chain';

	const currentYear = new Date().getFullYear();
	const form = $state({
		userName: '',
		userBirthYear: '',
		parentName: '',
		parentBirthYear: '',
		grandparentName: '',
		grandparentBirthYear: ''
	});
	let report = $state<FamilyChainReport | null>(null);
	let errors = $state<string[]>([]);

	function parseYear(value: string): number {
		return Number.parseInt(value, 10);
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const input = {
			userName: form.userName,
			userBirthYear: parseYear(form.userBirthYear),
			parentName: form.parentName,
			parentBirthYear: parseYear(form.parentBirthYear),
			grandparentName: form.grandparentName,
			grandparentBirthYear: parseYear(form.grandparentBirthYear)
		};

		const validation = validateFamilyChainInput(input, { currentYear });

		if (!validation.valid) {
			errors = validation.errors;
			report = null;
			return;
		}

		errors = [];
		report = buildFamilyChainReport(input, { currentYear });
	}
</script>

<div class="shell">
	<SiteHeader activeHref="/family-chain" />

	<main>
		<section class="hero">
			<div class="panel hero-copy">
				<div class="eyebrow">Free to use</div>
				<h1>The Family Chain</h1>
				<p>
					Enter three names and three birth years — you, a parent, and a grandparent. The Family
					Chain calculates how much life the three of you have shared so far, then estimates how
					much simultaneous time may still be left.
				</p>
				<div class="hero-pullquote">
					“The family line does not move in neat decades. For a while, three generations are all
					alive inside the same ordinary year.”
				</div>
			</div>

			<div class="panel form-panel">
				<form class="form-stack" onsubmit={handleSubmit}>
					<p class="form-intro">
						Start with the names and years. The window is hidden inside the overlap.
					</p>

					{#if errors.length > 0}
						<ul class="error-list" aria-live="polite">
							{#each errors as error (error)}
								<li>{error}</li>
							{/each}
						</ul>
					{/if}

					<div class="form-grid">
						<label class="field">
							<span class="field-label">Your name</span>
							<input
								class="field-input"
								bind:value={form.userName}
								maxlength="40"
								placeholder="Eilidh"
							/>
						</label>

						<label class="field">
							<span class="field-label">Your birth year</span>
							<input
								class="field-input"
								bind:value={form.userBirthYear}
								inputmode="numeric"
								maxlength="4"
								placeholder="2000"
							/>
						</label>

						<label class="field">
							<span class="field-label">Parent's name</span>
							<input
								class="field-input"
								bind:value={form.parentName}
								maxlength="40"
								placeholder="Moira"
							/>
						</label>

						<label class="field">
							<span class="field-label">Parent's birth year</span>
							<input
								class="field-input"
								bind:value={form.parentBirthYear}
								inputmode="numeric"
								maxlength="4"
								placeholder="1975"
							/>
						</label>

						<label class="field">
							<span class="field-label">Grandparent's name</span>
							<input
								class="field-input"
								bind:value={form.grandparentName}
								maxlength="40"
								placeholder="Jean"
							/>
						</label>

						<label class="field">
							<span class="field-label">Grandparent's birth year</span>
							<input
								class="field-input"
								bind:value={form.grandparentBirthYear}
								inputmode="numeric"
								maxlength="4"
								placeholder="1950"
							/>
						</label>
					</div>

					<button class="primary-button" type="submit">Show me the window →</button>
					<div class="button-caption">No accounts. No storage.</div>
				</form>
			</div>
		</section>

		<section class="panel results" aria-live="polite">
			{#if report}
				<div class="result-header">
					<div>
						<h2 class="result-title">
							{report.input.userName}, {report.input.parentName}, and {report.input.grandparentName}
						</h2>
					</div>
					<div class="note">Average life expectancy used: 81 years</div>
				</div>

				<div class="epoch-grid">
					{#each report.cards as card (card.key)}
						<article class="epoch-card" style={`animation-delay: ${card.delayMs}ms`}>
							<h3 class="epoch-title">{card.title}</h3>
							<p class="epoch-body">{card.body}</p>
						</article>
					{/each}
				</div>

				<p class="report-cta">
					<a class="report-cta-link" href={resolve('/')}>
						Want to capture who they were while there's still time? →
					</a>
				</p>
			{:else}
				<div class="result-header">
					<div>
						<div class="result-kicker">Waiting for your names</div>
						<h2 class="result-title">The window appears here.</h2>
					</div>
				</div>
				<p class="placeholder-copy">
					The Family Chain returns four cards: your shared years with a grandparent, your shared
					years with a parent, the years all three generations overlapped, and the estimated time
					still left while all three may be alive together.
				</p>
				<div class="placeholder-grid placeholder-grid--four">
					<div class="placeholder-card">
						<strong>You and your grandparent</strong>
						<p>The years the oldest link in the chain has overlapped with your own life.</p>
					</div>
					<div class="placeholder-card">
						<strong>You and your parent</strong>
						<p>The simpler overlap — still part of the same emotional measure.</p>
					</div>
					<div class="placeholder-card">
						<strong>All three of you</strong>
						<p>One number for the years three generations stood inside the same world.</p>
					</div>
					<div class="placeholder-card">
						<strong>The window</strong>
						<p>The remaining estimate for how long that three-generation moment might hold.</p>
					</div>
				</div>
			{/if}
		</section>
	</main>

	<SiteFooter />
</div>
