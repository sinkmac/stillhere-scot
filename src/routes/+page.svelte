<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { homepageContent } from '$lib/site-content';
</script>

<div class="shell">
  <SiteHeader activeHref="/" />

  <main>
    <section class="hero">
      <div class="panel hero-copy">
        <div class="eyebrow">Still Here</div>
        <h1>{homepageContent.headline}</h1>
        <p>{homepageContent.subhead}</p>
        <div class="hero-cta-group">
          <a class="primary-button" href={homepageContent.ctaHref}>{homepageContent.ctaLabel}</a>
          <div class="button-caption">{homepageContent.tagline}</div>
        </div>
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
