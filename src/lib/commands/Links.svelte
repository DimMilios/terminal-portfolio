<script lang="ts">
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/DimMilios",
      urlText: "github/DimMilios",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/dimitris-milios",
      urlText: "linkedin/dimitris-milios",
    },
  ];
</script>

<p>You can find me at:</p>

<div class="socials">
  {#each links as { name, url, urlText }, i}
    <span class="text-primary">{i + 1}. {name}</span>
    <span class="link">
      <span>- </span>
      <a class="link-secondary" href={url} target="_blank">{urlText}</a></span
    >
  {/each}
</div>

<style>
  p {
    margin: 0.2rem 0 0.7rem 0;
  }

  .socials {
    display: grid;
    grid-template-columns: 15ch 1fr;
  }

  .link {
    margin-bottom: 0.4rem;
  }
</style>
