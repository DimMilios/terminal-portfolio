<script lang="ts">
  import Welcome from "../commands/Welcome.svelte";
  import type { CommandKey } from "../types";

  export let command: CommandKey;
</script>

<div>
  {#if command === "welcome"}
    <Welcome />
  {:else}
    Oops
  {/if}
</div>
