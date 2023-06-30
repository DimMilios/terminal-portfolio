<script lang="ts">
  import type { HTMLImgAttributes } from "svelte/elements";
  export let image: HTMLImgAttributes;
  export let text: string;
</script>

<img
  class="inline-icon"
  alt={image.alt ?? "inline text logo"}
  {...image}
/><span class="text">{text}</span>

<style>
  .inline-icon {
    vertical-align: text-bottom;
  }

  .text {
    color: var(--color-primary);
  }
</style>
