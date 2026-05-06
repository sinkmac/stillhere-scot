<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { faqPage } from '$lib/site-content';
</script>

<div class="shell">
  <SiteHeader activeHref="/faq" />

  <main>
    <section class="panel content-panel">
      <div class="eyebrow">Still Here</div>
      <h1 class="content-title">{faqPage.title}</h1>
      <div class="content-body faq-body">
        {#each faqPage.items as item}
          <section class="faq-item">
            <h2 class="content-section-title">{item.question}</h2>
            <p>{item.answer}</p>
          </section>
        {/each}
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
