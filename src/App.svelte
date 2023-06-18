<script lang="ts">
  import Terminal from "./lib/components/Terminal.svelte";
  import type { Command } from "./lib/types";

  const commands: Command[] = [
    { command: "help", description: "help" },
    { command: "about", description: "about" },
    { command: "welcome", description: "welcome" },
  ];
</script>

<main>
  <Terminal {commands} />
</main>

<style>
</style>
