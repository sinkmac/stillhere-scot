<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { articles } from '$lib/site-content';
</script>

<div class="shell">
  <SiteHeader activeHref="/what-a-record-cant-tell-you" />

  <main>
    <section class="panel content-panel">
      <div class="eyebrow">Editorial</div>
      <h1 class="content-title">{articles.recordCantTellYou.title}</h1>
      <div class="content-body">
        {#each articles.recordCantTellYou.body as paragraph}
          <p>{paragraph}</p>
        {/each}
        <hr class="content-rule" />
        <p>{articles.recordCantTellYou.footer}</p>
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
