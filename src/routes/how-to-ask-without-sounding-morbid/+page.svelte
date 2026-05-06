<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { guidePages } from '$lib/site-content';
</script>

<div class="shell">
  <SiteHeader activeHref="/how-to-ask-without-sounding-morbid" />

  <main>
    <section class="panel content-panel">
      <div class="eyebrow">Guide</div>
      <h1 class="content-title">{guidePages.askWithoutMorbid.title}</h1>
      <div class="content-body">
        {#each guidePages.askWithoutMorbid.body as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
