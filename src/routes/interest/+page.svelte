<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { interestPage } from '$lib/site-content';
</script>

<div class="shell">
  <SiteHeader activeHref="/" />

  <main>
    <section class="panel content-panel narrow-panel">
      <div class="eyebrow">Still Here</div>
      <h1 class="content-title">{interestPage.title}</h1>
      <div class="content-body">
        <p>{interestPage.body}</p>
        <form class="interest-form" action={interestPage.formAction} method="POST">
          <label>
            <span>Name</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <button class="primary-button" type="submit">Register interest</button>
        </form>
      </div>
    </section>
  </main>

  <SiteFooter />
</div>
