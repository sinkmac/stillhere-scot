<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { guidePages } from '$lib/site-content';
</script>

<div class="shell">
  <SiteHeader activeHref="/what-if-they-resist" />

  <main>
    <section class="panel content-panel">
      <div class="eyebrow">Guide</div>
      <h1 class="content-title">{guidePages.whatIfTheyResist.title}</h1>
      <div class="content-body">
        {#each guidePages.whatIfTheyResist.body as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
