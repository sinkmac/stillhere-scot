<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { guidePages } from '$lib/site-content';
</script>

<div class="shell">
  <SiteHeader activeHref="/questions-to-ask-your-grandparents" />

  <main>
    <section class="panel content-panel">
      <div class="eyebrow">Guide</div>
      <h1 class="content-title">{guidePages.questionsForGrandparents.title}</h1>
      <div class="content-body">
        {#each guidePages.questionsForGrandparents.body as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
