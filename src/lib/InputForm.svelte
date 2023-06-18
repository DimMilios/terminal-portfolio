<script>
  export let host;
  export let input;

  export let handleInput;
  export let handleKeyDown;
</script>

<form class="input-form" on:submit|preventDefault>
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
    on:input={handleInput}
    on:keydown={handleKeyDown}
  />
</form>

<style>
  .input-form {
    display: flex;
  }

  .label-text {
    margin-right: 0.75rem;
  }

  #terminal-input {
    font-size: initial;
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
