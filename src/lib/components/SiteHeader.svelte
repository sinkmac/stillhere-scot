<script lang="ts">
	import { resolve } from '$app/paths';
	import { toolNavigationLinks } from '$lib/site-navigation';

	let { activeHref }: { activeHref: string } = $props();
</script>

<header class="masthead">
	<div>
		<a class="brand-mark brand-link" href={resolve('/')}>Still <em>Here</em></a>
		<div class="brand-tagline">because they were here too</div>
	</div>
	<nav class="masthead-nav" aria-label="Tool navigation">
		{#each toolNavigationLinks as link (link.href)}
			<a
				class="masthead-link"
				class:masthead-link--active={activeHref === link.href}
				href={resolve(link.href)}
				aria-current={activeHref === link.href ? 'page' : undefined}
			>
				{link.label}
			</a>
		{/each}
	</nav>
</header>
