<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { articles } from '$lib/site-content';
</script>

<div class="shell">
  <SiteHeader activeHref="/when-the-story-isnt-simple" />

  <main>
    <section class="panel content-panel">
      <div class="eyebrow">Editorial</div>
      <h1 class="content-title">{articles.storyIsntSimple.title}</h1>
      <div class="content-body">
        {#each articles.storyIsntSimple.body as paragraph}
          <p>{paragraph}</p>
        {/each}
        <hr class="content-rule" />
        <p>{articles.storyIsntSimple.footer}</p>
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
