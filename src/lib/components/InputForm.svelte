<script lang="ts">
  import { closest } from '../util';

  export let host: string;
  export let input = '';

  export let handleKeyDown: (e: KeyboardEvent) => void;
  export let handleSubmit: (e: SubmitEvent) => void;

  let inputRef: HTMLInputElement | undefined;
  let handleGlobalClick = () => {
    inputRef?.focus();
  };

  $: suggestion = closest(input) ?? '';
</script>

<svelte:document on:click={handleGlobalClick} />

<form class="input-form" on:submit={handleSubmit}>
  <label for="terminal-input">
    <span class="label-text">
      <span class="name">dim</span>@<span class="host">{host}</span>:~$
    </span>
  </label>
  <span class="input-container">
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
    <span class="suggestion">{suggestion}</span>
  </span>
</form>

<style>
  .input-form {
    display: flex;
    align-items: center;
  }

  .label-text {
    margin-right: 0.75rem;
  }

  .input-container {
    background-color: var(--background-color-dark);
    position: relative;
    width: 100%;
  }

  #terminal-input {
    font-size: 100%;
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    margin: 0;
    padding: 0;
    background: none;
    caret-color: var(--color-primary);
    border: none;
    overflow: hidden;
    position: relative;
    z-index: 10;
    width: 100%;
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

  .suggestion {
    opacity: 0.5;
    position: absolute;
    left: 0;
    z-index: 5;
  }
</style>
