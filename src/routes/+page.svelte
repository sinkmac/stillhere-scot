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
        <p>
          Still Here is a private living-memory and family testimony platform. It helps families prepare
          careful questions, record voices and faces while they can still be recorded, and preserve the
          human context that certificates, census records, and genealogy databases cannot hold.
        </p>
        <p>
          It is not a public social network, not an advertising surface, and not a replacement for official records.
          The method is simple: start with a respectful conversation, record clearly, keep ownership with the family,
          and leave future descendants more than names and dates.
        </p>
        <div class="trust-list" aria-label="Still Here trust principles">
          <span>Private family archive</span>
          <span>No advertising</span>
          <span>Consent-first testimony</span>
        </div>
        <div class="hero-cta-group">
          <a class="primary-button hero-button" href={homepageContent.ctaHref}>{homepageContent.ctaLabel}</a>
          <div class="button-caption">{homepageContent.tagline}</div>
        </div>
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
