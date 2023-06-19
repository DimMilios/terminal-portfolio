<script>
  import { onMount } from "svelte";

  export let host;
  export let input = "";

  export let handleKeyDown;
  export let handleSubmit;

  let inputRef;
  let handleGlobalClick = () => {
    inputRef?.focus();
  };

  onMount(() => {
    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  });
</script>

<form class="input-form" on:submit={handleSubmit}>
  <label for="terminal-input">
    <span class="label-text">
      <span class="name">dim</span>@<span class="host">{host}</span>:~$
    </span>
  </label>
  <input
    id="terminal-input"
    title="Terminal Input"
    type="text"
    autocomplete="off"
    spellcheck="false"
    autocapitalize="off"
    bind:value={input}
    bind:this={inputRef}
    on:keydown={handleKeyDown}
  />
</form>

<style>
  .input-form {
    display: flex;
    align-items: center;
  }

  .label-text {
    margin-right: 0.75rem;
  }

  #terminal-input {
    font-size: 100%;
    font-family: "Inconsolata", monospace;
    font-weight: 500;
    margin: 0;
    padding: 0;
    flex-grow: 1;
    background-color: var(--background-color-dark);
    caret-color: var(--color-primary);
    border: none;
    overflow: hidden;
  }

  #terminal-input:focus {
    outline: none;
  }

  .name {
    color: var(--color-primary);
  }

  .host {
    color: var(--color-secondary);
  }
</style>
