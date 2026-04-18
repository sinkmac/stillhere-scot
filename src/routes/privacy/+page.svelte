<script lang="ts">
	import { resolve } from '$app/paths';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import { privacyPage } from '$lib/site-pages';
</script>

<svelte:head>
	<title>Still Here — {privacyPage.title}</title>
	<meta
		name="description"
		content="Privacy details for Still Here Phase 1, including browser-side calculations and third-party services."
	/>
</svelte:head>

<div class="shell">
	<header class="masthead">
		<div>
			<a class="brand-mark brand-link" href={resolve('/')}>Still <em>Here</em></a>
			<div class="brand-tagline">because they were here too</div>
		</div>
		<div class="eyebrow">Privacy</div>
	</header>

	<main>
		<section class="panel content-panel">
			<div class="eyebrow">Still Here</div>
			<h1 class="content-title">{privacyPage.title}</h1>
			<div class="content-body">
				<p>{privacyPage.lastUpdated}</p>
				{#each privacyPage.sections as section (section.heading)}
					<h2 class="content-section-title">{section.heading}</h2>
					<p>
						{#if section.heading === 'Contact'}
							If you have any questions about this privacy policy, contact us at
							<a class="content-link" href="mailto:sinclair.mclay@gmail.com"
								>sinclair.mclay@gmail.com</a
							>
						{:else}
							{section.body}
						{/if}
					</p>
				{/each}
			</div>
		</section>
	</main>

	<SiteFooter />
</div>
