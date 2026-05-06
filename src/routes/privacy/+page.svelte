<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { privacyPage } from '$lib/site-content';
</script>

<div class="shell">
  <SiteHeader activeHref="/privacy" />

  <main>
    <section class="panel content-panel">
      <div class="eyebrow">Still Here</div>
      <h1 class="content-title">{privacyPage.title}</h1>
      <div class="content-body">
        <p>{privacyPage.lastUpdated}</p>
        {#each privacyPage.sections as section}
          <h2 class="content-section-title">{section.heading}</h2>
          <p>{section.body}</p>
        {/each}
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
