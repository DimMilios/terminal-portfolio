<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import Help from "../commands/Help.svelte";
  import Welcome from "../commands/Welcome.svelte";
  import type { CommandKey } from "../types";

  type Option = {
    command: CommandKey;
    component: typeof SvelteComponent;
  };

  export let command: CommandKey;

  const options: Option[] = [
    { command: "help", component: Help },
    { command: "welcome", component: Welcome },
    { command: "", component: null },
  ];

  let selected: Option;
  $: selected = options.find((c) => c.command === command) ?? options[0];
</script>

<div>
  <svelte:component this={selected.component} />
</div>
