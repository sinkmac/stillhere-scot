<script lang="ts">
  import { parseBracketLinks } from '$lib/utils/inline-links';

  let { text } = $props<{ text: string }>();

  const chunks = $derived(parseBracketLinks(text));
</script>

<p>
  {#each chunks as chunk}
    {#if chunk.type === 'link'}
      <a href={chunk.href} rel="nofollow sponsored noopener noreferrer" target="_blank">{chunk.label}</a>
    {:else}
      {chunk.value}
    {/if}
  {/each}
</p>
