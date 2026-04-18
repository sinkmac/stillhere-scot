<script lang="ts">
	import { resolve } from '$app/paths';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import { aboutPage } from '$lib/site-pages';
</script>

<svelte:head>
	<title>Still Here — {aboutPage.title}</title>
	<meta
		name="description"
		content="Why Still Here exists, where it came from, and how to get in touch."
	/>
</svelte:head>

<div class="shell">
	<header class="masthead">
		<div>
			<a class="brand-mark brand-link" href={resolve('/')}>Still <em>Here</em></a>
			<div class="brand-tagline">because they were here too</div>
		</div>
		<div class="eyebrow">About</div>
	</header>

	<main>
		<section class="panel content-panel">
			<div class="eyebrow">Still Here</div>
			<h1 class="content-title">{aboutPage.title}</h1>
			<div class="content-body">
				<p>
					Still Here began with a trip to Register House in Edinburgh, a reel of microfiche, and the
					realisation that the archive existed — but the person didn't.
				</p>
				<p>
					We found names on records and dates on certificates. Everything official that needed to
					exist, existed. But there was no sense at all of who these people actually were. How they
					sounded. What they worried about. What their lives felt like from the inside.
				</p>
				<p>
					That gap — between the record and the person — is what Still Here exists to close. Not for
					the past, which is gone. For the future, which isn't.
				</p>
				<p>
					In fifty years, your family will know your grandmother existed. Still Here makes sure they
					know who she actually was.
				</p>
				<p>Still Here is built by AI Scotland Productions, Kirriemuir, Angus. Est. 2026.</p>
				<p>
					Contact:
					<a class="content-link" href={`mailto:${aboutPage.contactEmail}`}
						>{aboutPage.contactEmail}</a
					>
				</p>
			</div>
		</section>
	</main>

	<SiteFooter />
</div>
