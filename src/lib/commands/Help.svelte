<script lang="ts">
  import { commands } from "./commands";

  export let props;
</script>

{#if "error" in props}
  <p class="error">{props.error}</p>
{/if}

<ul>
  {#each commands as { command, description }}
    <span class="command">{command}</span>
    <span class="description">- {description}</span>
  {/each}
</ul>

<div class="keybinds">
  <span>Tab</span><span>=&gt; autocompletes the command</span>
  <span>Ctrl + l</span><span>=&gt; clear the terminal</span>
</div>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: 12ch 1fr;
  }

  .command {
    line-height: 1.3rem;
    color: var(--color-primary);
  }

  .description {
    color: var(--text-color-200);
  }

  .keybinds {
    margin: 0.5rem 0;
    color: var(--text-color-100);
    display: grid;
    grid-template-columns: 12ch 1fr;
    row-gap: 0.2rem;
  }

  .error {
    margin-top: 0;
    color: var(--text-error);
  }
</style>
