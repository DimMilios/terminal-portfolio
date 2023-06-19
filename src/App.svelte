<script lang="ts">
  import Terminal from "./lib/components/Terminal.svelte";
  import type { Command } from "./lib/types";

  const commands: Command[] = [
    { command: "help", description: "help" },
    { command: "welcome", description: "welcome" },
    { command: "about", description: "about" },
    { command: "education", description: "education" },
    { command: "projects", description: "projects" },
    { command: "links", description: "links" },
    { command: "contact", description: "contact" },
  ];
</script>

<main>
  <Terminal {commands} />
</main>

<style>
</style>
