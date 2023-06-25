<script lang="ts">
  import Terminal from "./lib/components/Terminal.svelte";
  import { fullScreen } from "./lib/stores";
</script>

<main class:minimized={!$fullScreen}>
  <Terminal />
</main>

<style>
  @media (min-width: 1200px) {
    :root {
      --background-color-light-dark: rgba(255, 255, 255, 0.8);
    }

    .minimized {
      max-width: 1080px;
      margin: 0 auto;
    }
  }
</style>
