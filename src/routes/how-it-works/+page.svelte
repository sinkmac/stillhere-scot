<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { howItWorksPage } from '$lib/site-content';
</script>

<div class="shell">
  <SiteHeader activeHref="/how-it-works" />

  <main>
    <section class="panel content-panel">
      <div class="eyebrow">Still Here</div>
      <h1 class="content-title">{howItWorksPage.title}</h1>
      <div class="content-body">
        {#each howItWorksPage.sections as section}
          <h2 class="content-section-title">{section.heading}</h2>
          <p>{section.body}</p>
        {/each}
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
