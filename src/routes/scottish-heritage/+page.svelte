<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { scottishHeritagePage } from '$lib/site-content';
</script>

<div class="shell">
  <SiteHeader activeHref="/scottish-heritage" />

  <main>
    <section class="panel content-panel">
      <div class="eyebrow">Still Here</div>
      <h1 class="content-title">{scottishHeritagePage.title}</h1>
      <div class="content-body">
        {#each scottishHeritagePage.paragraphs as paragraph}
          <p>{paragraph}</p>
        {/each}

        <h2 class="content-section-title">The diaspora</h2>
        {#each scottishHeritagePage.diaspora as paragraph}
          <p>{paragraph}</p>
        {/each}

        <h2 class="content-section-title">Scottish genealogy resources</h2>
        {#each scottishHeritagePage.resources as resource}
          <p><strong>{resource.name}</strong> — {resource.body}</p>
        {/each}
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
