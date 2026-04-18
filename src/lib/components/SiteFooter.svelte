<script lang="ts">
	import { resolve } from '$app/paths';
	import { footerLinks } from '$lib/site-pages';
</script>

<footer class="site-footer" aria-label="Site footer">
	<nav class="site-footer-nav" aria-label="Footer links">
		{#each footerLinks as link, index (link.href)}
			<a class="site-footer-link" href={resolve(link.href)}>{link.label}</a>
			{#if index < footerLinks.length - 1}
				<span aria-hidden="true">·</span>
			{/if}
		{/each}
	</nav>
</footer>
