<script>
  import TextIcon from '../components/TextIcon.svelte';
</script>

<div>
  <h3 class="header">Deloitte</h3>
  <p class="text">Software Developer | May 2022 - Present</p>

  <p class="wall">
    Worked on a large multi-tenant enterprise government system based on Service
    Oriented Architecture (SOA) as a full-stack developer.
  </p>

  <p class="wall">
    Technology stack consisted of
    <TextIcon
      image={{
        src: 'icons/angular.svg',
        alt: 'angular logo',
        width: 22,
        height: 22,
      }}
      text="Angular"
    />
    on the frontend,
    <TextIcon
      image={{
        src: 'icons/java.svg',
        alt: 'java logo',
        width: 22,
        height: 22,
      }}
      text="Java"
    /> with
    <TextIcon
      image={{
        src: 'icons/spring.svg',
        alt: 'spring boot logo',
        width: 22,
        height: 22,
      }}
      text="Spring Boot"
    /> on the backend,
    <TextIcon
      image={{
        src: 'icons/mysql.svg',
        alt: 'mysql logo',
        width: 22,
        height: 22,
      }}
      text="MySQL"
    /> as a database, and
    <TextIcon
      image={{
        src: 'icons/github.svg',
        alt: 'github logo',
        width: 22,
        height: 22,
      }}
      text="GitHub"
    /> for collaboration.
  </p>

  <p class="wall">Developed high fidelity prototypes for new projects.</p>
</div>

<div style="margin-block-start: 2rem;">
  <h3 class="header">MusiCoLab</h3>
  <p class="text">Software Developer | Jul. 2021 - Dec. 2023</p>

  <p class="wall">
    Participated in <a
      href="https://musicolab.hmu.gr"
      class="link-secondary"
      target="_blank">MusiCoLab</a
    > research project of Hellenic Mediterranean University as part of my bachelor
    thesis and later as an individual contributor.
  </p>

  <p class="wall">
    Collaborated within a team to develop, deploy, and maintain two vanilla <TextIcon
      image={{
        src: 'icons/javascript.svg',
        alt: 'javascript logo',
        width: 22,
        height: 22,
      }}
      text="JavaScript"
    /> front-end applications and a <TextIcon
      image={{
        src: 'icons/nodejs.svg',
        alt: 'node.js logo',
        width: 22,
        height: 22,
      }}
      text="Node.js"
    /> WebSocket server on an on-premises machine.
  </p>
</div>

<style>
  .header {
    color: var(--text-color-100);
    font-weight: 700;
    margin: 0;
  }

  .text {
    opacity: 0.8;
    margin: 0 0 0.5rem 0;
  }

  .wall {
    max-width: 80ch;
  }
</style>
