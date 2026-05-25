<script lang="ts">
  import { page } from '$app/state';
  import favicon from '$lib/assets/favicon.svg';
  import { getRouteSeo } from '$lib/route-seo';
  import { faqPage } from '$lib/site-content';
  import { siteSeo } from '$lib/site-seo';
  import '../app.css';

  let { children } = $props();

  const routeSeo = $derived(getRouteSeo(page.url.pathname));
  const schemaJson = $derived.by(() => {
    const graph: Record<string, unknown>[] = [
      {
        '@type': 'WebSite',
        name: 'Still Here',
        url: siteSeo.url,
        description: siteSeo.description
      },
      {
        '@type': 'Organization',
        name: 'Still Here',
        url: siteSeo.url,
        description: 'A living memory and genealogy testimony platform by AI Scotland Productions.'
      }
    ];

    if (routeSeo.schemaKind === 'FAQPage') {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: faqPage.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer }
        }))
      });
    } else if (routeSeo.schemaKind === 'Article') {
      graph.push({
        '@type': 'Article',
        headline: routeSeo.title.replace(' — Still Here', ''),
        description: routeSeo.description,
        url: routeSeo.url,
        publisher: { '@type': 'Organization', name: 'Still Here', url: siteSeo.url }
      });
    }

    return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\u003c');
  });
</script>

<svelte:head>
  <title>{routeSeo.title}</title>
  <link rel="icon" href={favicon} />
  <meta name="description" content={routeSeo.description} />
  <meta name="robots" content={siteSeo.robots} />
  <link rel="canonical" href={routeSeo.url} />
  <meta property="og:title" content={routeSeo.title} />
  <meta property="og:description" content={routeSeo.description} />
  <meta property="og:image" content={siteSeo.ogImage} />
  <meta property="og:url" content={routeSeo.url} />
  <meta property="og:type" content={routeSeo.type} />
  {@html `<script type="application/ld+json">${schemaJson}</script>`}
</svelte:head>

{@render children()}
