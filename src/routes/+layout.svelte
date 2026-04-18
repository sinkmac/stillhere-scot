<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { siteSeo } from '$lib/site-seo';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>{siteSeo.title}</title>
	<link rel="icon" href={favicon} />
	<meta name="description" content={siteSeo.description} />
	<meta name="robots" content={siteSeo.robots} />
	<link rel="canonical" href={siteSeo.url} />
	<meta property="og:title" content={siteSeo.title} />
	<meta property="og:description" content={siteSeo.ogDescription} />
	<meta property="og:image" content={siteSeo.ogImage} />
	<meta property="og:url" content={siteSeo.url} />
	<meta property="og:type" content={siteSeo.ogType} />
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2335335210412692"
		crossorigin="anonymous"
	></script>
</svelte:head>

{@render children()}
