<script lang="ts">
  import InputForm from "./InputForm.svelte";
  import type { Command } from "../types";

  let host = window.location.hostname;
  export let commands: Command[];

  let input = "";
  const handleInput = (event) => {
    input = event.target.value.trim();
  };
  const handleKeyDown = (event) => {};

  $: console.log(input);
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
    <InputForm {host} {input} {handleInput} {handleKeyDown} />
  </div>
</div>

<style>
  #terminal-container {
    margin-top: 2rem;
    border-radius: 5px;
    min-height: 90vh;
    background-color: var(--background-color-dark);
  }

  /* Terminal header BEGIN */
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
  /* Terminal header END */

  /* Terminal body BEGIN */
  .terminal-body {
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
    padding: 0 1rem;
    margin-top: 0.5rem;
    max-height: 90vh;
    overflow-y: auto;
  }

  .terminal-body::-webkit-scrollbar {
    width: 0.4rem;
  }

  .terminal-body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--scroll-color);
    border-radius: 60px;
  }

  .terminal-body::-webkit-scrollbar-thumb {
    border-radius: 60px;
    background-color: var(--text-color-200);
  }

  .terminal-body::-webkit-scrollbar-thumb:hover {
    background-color: var(--text-color-100);
  }
  /* Terminal body END */
</style>
