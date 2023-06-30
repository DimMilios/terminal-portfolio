<script lang="ts">
  export let header: string;
  export let skills: { skill: string; icon: string }[];
</script>

<h3 class="header">{header}</h3>
<ul>
  {#each skills as { skill, icon }}
    <li class="list-item">
      <span class="icon">
        <img src="icons/{icon}" alt={skill} width="28" height="28" />
      </span>
      <span class="skill">{skill}</span>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .list-item {
    display: flex;
    align-items: center;
  }

  .skill {
    color: var(--color-primary);
    margin-left: 1rem;
  }

  .icon {
    margin-left: 0.5rem;
  }

  .header {
    color: var(--text-color-100);
    font-weight: 700;
    font-size: inherit;
  }
</style>
