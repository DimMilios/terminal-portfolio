<script lang="ts">
  import Help from "../commands/Help.svelte";
  import Welcome from "../commands/Welcome.svelte";
  import type { CommandKey } from "../types";

  export let command: CommandKey;
</script>

<div>
  {#if command === "welcome"}
    <Welcome />
  {:else if command === "help"}
    <Help />
  {:else}
    Oops
  {/if}
</div>
