<script>
  let host = window.location.hostname;
</script>

<div id="terminal-container">
  <div class="terminal-header">
    <div class="buttons">
      <div class="btn-round red" />
      <div class="btn-round yellow" />
      <div class="btn-round green" />
    </div>
    <div class="terminal-header-text">
      <span>root@macbook</span>
    </div>
  </div>

  <div class="terminal-body">
    <form class="input-form">
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
      />
    </form>
  </div>
</div>

<style>
  #terminal-container {
    margin-top: 2rem;
    border-radius: 5px;
    background-color: var(--background-color-dark);
  }

  .terminal-body {
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
    padding: 0 1rem;
    margin-top: 0.5rem;
  }

  .terminal-header {
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 0 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
  }

  .btn-round {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
  }
  .red {
    background-color: #ff544d;
    border: 1px solid #da3c37;
  }
  .yellow {
    background-color: #ffb429;
    border: 1px solid #f0a318;
  }
  .green {
    background-color: #25c63a;
    border: 1px solid #12a025;
  }

  .terminal-header-text {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

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
