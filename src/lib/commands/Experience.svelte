<script>
  import TextIcon from "../components/TextIcon.svelte";
</script>

<h3 class="header">Deloitte</h3>
<p class="text">Junior Software Developer | 2022 - Present</p>

<p>
  Worked on a large enterprise government system. Technology stack
  consisted of
  <TextIcon
    image={{
      src: "/icons/angular.svg",
      alt: "angular logo",
      width: 22,
      height: 22,
    }}
    text="Angular"
  />
  on the frontend,
  <TextIcon
    image={{ src: "/icons/java.svg", alt: "java logo", width: 22, height: 22 }}
    text="Java"
  /> with
  <TextIcon
    image={{
      src: "/icons/spring.svg",
      alt: "spring boot logo",
      width: 22,
      height: 22,
    }}
    text="Spring Boot"
  /> on the backend,
  <TextIcon
    image={{
      src: "/icons/mysql.svg",
      alt: "mysql logo",
      width: 22,
      height: 22,
    }}
    text="MySQL"
  /> as a database, and
  <TextIcon
    image={{
      src: "/icons/github.svg",
      alt: "github logo",
      width: 22,
      height: 22,
    }}
    text="GitHub"
  /> for collaboration.
</p>
<h4>My responsibilities included:</h4>
<ul>
  <li>Debug and maintain said sytem</li>
  <li>Optimize database operations</li>
  <li>Develop new features</li>
</ul>

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

  h4 {
    margin: 0.5rem 0 0 0;
  }

  ul {
    list-style-type: circle;
    margin: 0;
  }
</style>
