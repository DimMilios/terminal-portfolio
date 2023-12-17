<script lang="ts">
  import SkillsList from '../components/SkillsList.svelte';

  const skills = [
    { skill: 'angular', icon: 'angular.svg', category: 'frontend' },
    { skill: 'react', icon: 'react.svg', category: 'frontend' },
    { skill: 'svelte', icon: 'svelte.svg', category: 'frontend' },
    { skill: 'javascript', icon: 'javascript.svg', category: 'frontend' },
    { skill: 'css', icon: 'css3.svg', category: 'frontend' },
    { skill: 'html', icon: 'html5.svg', category: 'frontend' },

    { skill: 'java', icon: 'java.svg', category: 'backend' },
    { skill: 'spring boot', icon: 'spring.svg', category: 'backend' },
    { skill: 'mysql', icon: 'mysql.svg', category: 'backend' },
    { skill: 'postgresql', icon: 'postgresql.svg', category: 'backend' },
    { skill: 'typescript', icon: 'typescript.svg', category: 'backend' },
    { skill: 'nodejs', icon: 'nodejs.svg', category: 'backend' },
    { skill: 'express', icon: 'express.svg', category: 'backend' },
    { skill: 'go', icon: 'go.svg', category: 'backend' },

    { skill: 'docker', icon: 'docker.svg', category: 'other' },
    { skill: 'git', icon: 'git.svg', category: 'other' },
    { skill: 'aws', icon: 'aws.svg', category: 'other' },
    { skill: 'github', icon: 'github.svg', category: 'other' },
    { skill: 'linux', icon: 'linux.svg', category: 'other' },
  ];

  const categories = { frontend: [], backend: [], other: [] };

  const skillsByCategory = skills.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.category]: prev[curr.category].concat(curr),
    };
  }, categories);
</script>

<SkillsList header="Back End Skills" skills={skillsByCategory.backend} />
<SkillsList header="Front End Skills" skills={skillsByCategory.frontend} />
<SkillsList header="Other Skills" skills={skillsByCategory.other} />
