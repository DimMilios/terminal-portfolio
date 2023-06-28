<script lang="ts">
  const skills = [
    { skill: 'angular', icon: 'angular.svg' },
    { skill: 'css', icon: 'css3.svg' },
    { skill: 'docker', icon: 'docker.svg' },
    { skill: 'express', icon: 'express.svg' },
    { skill: 'git', icon: 'git.svg' },
    { skill: 'github', icon: 'github.svg' },
    { skill: 'go', icon: 'go.svg' },
    { skill: 'html', icon: 'html5.svg' },
    { skill: 'java', icon: 'java.svg' },
    { skill: 'javascript', icon: 'javascript.svg' },
    { skill: 'linux', icon: 'linux.svg' },
    { skill: 'mysql', icon: 'mysql.svg' },
    { skill: 'nodejs', icon: 'nodejs.svg' },
    { skill: 'postgresql', icon: 'postgresql.svg' },
    { skill: 'react', icon: 'react.svg' },
    { skill: 'spring boot', icon: 'spring.svg' },
    { skill: 'svelte', icon: 'svelte.svg' },
    { skill: 'typescript', icon: 'typescript.svg' },
  ];
</script>

<ul>
  {#each skills as { skill, icon }}
    <li class="list-item">
      <span class="skill">{skill}</span>
      <span class="icon">
        <img src="icons/{icon}" alt={skill} width="32" height="32">
      </span>
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
  }

  .icon {
    margin-left: 0.5rem;
  }
</style>