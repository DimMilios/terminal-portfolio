<script lang="ts">
  import InputForm from "./InputForm.svelte";
  import type { CommandKey } from "../types";
  import Output from "./Output.svelte";
  import { closest, isValidCommand } from "../util";

  let host = window.location.hostname;
  let commandHistory: CommandKey[] = ["welcome"];

  const clearCommands = () => {
    commandHistory = [];
  };

  let input: string;
  const handleKeyDown = (event: KeyboardEvent) => {
    let key = event.key.toLowerCase();
    if (event.ctrlKey && key === "l") {
      event.preventDefault();
      clearCommands();
    }

    if (key === "tab") {
      event.preventDefault();
      event.stopPropagation();

      let command = closest(input);
      if (isValidCommand(command)) {
        input = command;
      }
    }
  };

  let command: CommandKey;
  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    command = input.trim() as CommandKey;

    input = "";
    if (command === "clear") {
      clearCommands();
      return;
    }

    commandHistory.unshift(command);
    commandHistory = commandHistory;
  };
</script>

<div id="terminal-container">
  <div class="terminal-header">
    <div class="buttons">
      <div class="btn-round red" />
      <div class="btn-round yellow" />
      <div class="btn-round green" />
    </div>
    <div class="terminal-header-text">
      <span>visitor@{host}</span>
    </div>
  </div>

  <div class="terminal-body">
    <InputForm bind:input {host} {handleKeyDown} {handleSubmit} />

    {#each commandHistory as ch}
      <Output command={ch} />
      <div class="old-command">
        <span class="label-text">
          <span class="name">dim</span>@<span class="host">{host}</span>:~$
        </span>
        <span id="command-text">{ch}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  #terminal-container {
    margin-top: 0;
    border-radius: 5px;
    min-height: 100vh;
    background-color: var(--background-color-dark);
  }

  /* For large desktop/laptop screens */
  @media (min-width: 1200px) {
    #terminal-container {
      margin-top: 2rem;
      border-radius: 5px;
      min-height: 90vh;
      background-color: var(--background-color-dark);
    }

    .terminal-body {
      max-height: 85vh !important;
      padding: 1rem !important;
    }
  }

  @media screen and (orientation: landscape) {
    .terminal-body {
      max-height: 80vh !important;
      padding: 1rem !important;
    }
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

  @media screen and (min-width: 450px) {
    .terminal-header-text > span {
      transform: translateX(-20%);
    }
  }
  /* Terminal header END */

  /* Terminal body BEGIN */
  .terminal-body {
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    max-height: 90vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .terminal-body::-webkit-scrollbar {
    width: 0.6rem;
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

  .label-text {
    margin-right: 0.75rem;
  }

  .old-command {
    display: flex;
    align-items: center;
  }

  #command-text {
    flex-grow: 1;
    background-color: var(--background-color-dark);
    caret-color: var(--color-primary);
    border: none;
    overflow: hidden;
  }

  .name {
    color: var(--color-primary);
  }

  .host {
    color: var(--color-secondary);
  }
  /* Terminal body END */
</style>
