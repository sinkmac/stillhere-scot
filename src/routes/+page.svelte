<script lang="ts">
	import {
		buildSameSkyReport,
		getTimelineSegmentMetrics,
		getTimelineVisibleLabels,
		getTimelineYearPercent,
		validateSameSkyInput,
		type SameSkyReport
	} from '$lib/report/same-sky';

	const currentYear = new Date().getFullYear();
	const form = $state({
		userName: '',
		userBirthYear: '',
		ancestorName: '',
		ancestorBirthYear: ''
	});
	let report = $state<SameSkyReport | null>(null);
	let errors = $state<string[]>([]);

	function parseYear(value: string): number {
		return Number.parseInt(value, 10);
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const input = {
			userName: form.userName,
			userBirthYear: parseYear(form.userBirthYear),
			ancestorName: form.ancestorName,
			ancestorBirthYear: parseYear(form.ancestorBirthYear)
		};

		const validation = validateSameSkyInput(input, { currentYear });

		if (!validation.valid) {
			errors = validation.errors;
			report = null;
			return;
		}

		errors = [];
		report = buildSameSkyReport(input, { currentYear });
	}

	function percent(year: number, timeline: SameSkyReport['timeline']): number {
		return getTimelineYearPercent(year, timeline);
	}

	function segmentStyle(start: number, end: number, timeline: SameSkyReport['timeline']): string {
		const metrics = getTimelineSegmentMetrics(start, end, timeline);
		return `left: ${metrics.leftPercent}%; width: ${metrics.widthPercent}%`;
	}
</script>

<svelte:head>
	<title>Still Here — Same Sky</title>
	<meta
		name="description"
		content="Compare your life with an ancestor's and receive an emotional epoch report grounded in real historical events."
	/>
</svelte:head>

<div class="shell">
	<header class="masthead">
		<div>
			<div class="brand-mark">Still <em>Here</em></div>
			<div class="brand-tagline">because they were here too</div>
		</div>
		<div class="eyebrow">Phase 1 — Same Sky</div>
	</header>

	<main>
		<section class="hero">
			<div class="panel hero-copy">
				<div class="eyebrow">One page. One button. One report.</div>
				<h1>Place your life beside theirs.</h1>
				<p>
					Same Sky turns two birth years into something more human than a family record. Enter your
					name, an ancestor's name, and the years you were born. The result is an epoch report: four
					emotional cards, one timeline, and a sharper sense of how close the past really is.
				</p>
				<div class="hero-pullquote">
					“When you were born, they had already lived a whole life in a world that felt as normal to
					them as this one feels to you.”
				</div>
			</div>

			<div class="panel form-panel">
				<form class="form-stack" onsubmit={handleSubmit}>
					<p class="form-intro">
						Begin with the years. The feeling comes from the distance between them.
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
								placeholder="1990"
							/>
						</label>

						<label class="field">
							<span class="field-label">Ancestor's name</span>
							<input
								class="field-input"
								bind:value={form.ancestorName}
								maxlength="40"
								placeholder="Margaret"
							/>
						</label>

						<label class="field">
							<span class="field-label">Ancestor's birth year</span>
							<input
								class="field-input"
								bind:value={form.ancestorBirthYear}
								inputmode="numeric"
								maxlength="4"
								placeholder="1930"
							/>
						</label>
					</div>

					<button class="primary-button" type="submit">Generate epoch report</button>
					<div class="button-caption">No accounts. No storage. Just the comparison.</div>
				</form>
			</div>
		</section>

		<section class="panel results" aria-live="polite">
			{#if report}
				<div class="result-header">
					<div>
						<div class="result-kicker">Epoch report</div>
						<h2 class="result-title">{report.input.userName} and {report.input.ancestorName}</h2>
					</div>
					<div class="note">Current year: {currentYear}</div>
				</div>

				<div class="stat-grid">
					<div class="stat-card">
						<div class="stat-label">Years between births</div>
						<div class="stat-value">{report.stats.yearsBetweenBirths}</div>
						<div class="stat-detail">
							{report.input.ancestorName} arrived {report.stats.yearsBetweenBirths} years before you.
						</div>
					</div>

					<div class="stat-card">
						<div class="stat-label">Ancestor's age when you were born</div>
						<div class="stat-value">{report.stats.ancestorAgeWhenUserWasBorn}</div>
						<div class="stat-detail">
							That is how much life {report.input.ancestorName} had already carried by then.
						</div>
					</div>

					<div class="stat-card">
						<div class="stat-label">How old they would be today</div>
						<div class="stat-value">{report.stats.ancestorWouldBeToday}</div>
						<div class="stat-detail">
							A reminder that the calendar keeps moving even when a life does not.
						</div>
					</div>
				</div>

				<div class="timeline-shell">
					<div class="eyebrow">Visual timeline</div>
					<h3
						class="result-title"
						style="font-size: clamp(1.6rem, 3vw, 2.2rem); margin-top: 0.25rem;"
					>
						The stretch of years you can hold together
					</h3>
					<p class="timeline-caption">
						Purple marks your ancestor's estimated life span, teal marks your own years so far, and
						coral shows the years those spans likely shared.
					</p>
					<div class="timeline-bar" aria-hidden="true">
						<div
							class="timeline-segment timeline-segment--ancestor"
							style={segmentStyle(
								report.timeline.ancestor.start,
								report.timeline.ancestor.end,
								report.timeline
							)}
						></div>
						<div
							class="timeline-segment timeline-segment--user"
							style={segmentStyle(
								report.timeline.user.start,
								report.timeline.user.end,
								report.timeline
							)}
						></div>
						<div
							class="timeline-segment timeline-segment--overlap"
							style={segmentStyle(
								report.timeline.overlap.start,
								report.timeline.overlap.end,
								report.timeline
							)}
						></div>
					</div>
					<div class="timeline-labels" aria-hidden="true">
						{#each getTimelineVisibleLabels(report.timeline) as label (label)}
							<span class="timeline-label" style={`left: ${percent(label, report.timeline)}%`}>
								{label}
							</span>
						{/each}
					</div>
					<div class="timeline-legend">
						<span><i class="legend-dot legend-dot--ancestor"></i>{report.input.ancestorName}</span>
						<span><i class="legend-dot legend-dot--user"></i>{report.input.userName}</span>
						<span><i class="legend-dot legend-dot--overlap"></i>Overlap</span>
					</div>
					<p class="timeline-note">
						Phase 1 uses an estimated life span for the visual only. Phase 2 is where a real record
						can replace that estimate with known dates.
					</p>
				</div>

				<div class="epoch-grid">
					{#each report.cards as card (card.key)}
						<article class="epoch-card" style={`animation-delay: ${card.delayMs}ms`}>
							<h3 class="epoch-title">{card.title}</h3>
							{#if card.year}
								<div class="epoch-year">{card.year}</div>
							{/if}
							<p class="epoch-body">{card.body}</p>
						</article>
					{/each}
				</div>
			{:else}
				<div class="result-header">
					<div>
						<div class="result-kicker">Waiting for your years</div>
						<h2 class="result-title">The report appears here.</h2>
					</div>
				</div>
				<p class="placeholder-copy">
					The output is designed to feel like something worth keeping: three stat cards, one visual
					timeline, and four pieces of historical language written to be screenshot-worthy rather
					than merely informative.
				</p>
				<div class="placeholder-grid">
					<div class="placeholder-card">
						<strong>Birth world</strong>
						<p>
							They were born into a world already moving in a direction you never had to witness
							begin.
						</p>
					</div>
					<div class="placeholder-card">
						<strong>The same sky moment</strong>
						<p>
							When you arrived, they had already lived long enough to call a different era ordinary.
						</p>
					</div>
					<div class="placeholder-card">
						<strong>Inversion</strong>
						<p>
							At your exact age, their present moment belonged to a year that now feels like
							history.
						</p>
					</div>
				</div>
			{/if}
		</section>
	</main>

	<div class="footer-copy">Still Here is quiet by design. No feed. No profile. No noise.</div>
</div>
