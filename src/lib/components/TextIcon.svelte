<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  export let image: HTMLImgAttributes;
  export let text: string;
</script>

<span class="container">
  <img
    class="inline-icon"
    alt={image.alt ?? 'inline text logo'}
    {...image}
  /><span class="text">{text}</span>
</span>

<style>
  .container {
    white-space: nowrap;
  }

  .inline-icon {
    vertical-align: text-bottom;
  }

  .text {
    color: var(--color-primary);
    margin-inline-start: 0.3rem;
  }
</style>
