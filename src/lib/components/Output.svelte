<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import Help from "../commands/Help.svelte";
  import Welcome from "../commands/Welcome.svelte";
  import type { CommandKey } from "../types";
  import About from "../commands/About.svelte";
  import Links from "../commands/Links.svelte";
  import Education from "../commands/Education.svelte";

  type Option = {
    command: CommandKey;
    component: typeof SvelteComponent;
  };

  export let command: CommandKey;

  const options: Option[] = [
    { command: "help", component: Help },
    { command: "welcome", component: Welcome },
    { command: "about", component: About },
    { command: "links", component: Links },
    { command: "education", component: Education },
    { command: "", component: null },
  ];

  $: selected = options.find((c) => c.command === command) ?? options[0];
</script>

<div>
  <svelte:component this={selected.component} />
</div>
