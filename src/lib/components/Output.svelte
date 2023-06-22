<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import Help from "../commands/Help.svelte";
  import Welcome from "../commands/Welcome.svelte";
  import type { CommandKey } from "../types";
  import About from "../commands/About.svelte";
  import Links from "../commands/Links.svelte";
  import Education from "../commands/Education.svelte";
  import Contact from "../commands/Contact.svelte";
  import Projects from "../commands/Projects.svelte";
  import Experience from "../commands/Experience.svelte";
  import Skills from "../commands/Skills.svelte";

  type Option = {
    command: CommandKey;
    component: typeof SvelteComponent;
  };

  type Props = {
    [key: string]: unknown;
  };

  export let command: CommandKey;

  const options: Option[] = [
    { command: "help", component: Help },
    { command: "welcome", component: Welcome },
    { command: "about", component: About },
    { command: "links", component: Links },
    { command: "education", component: Education },
    { command: "contact", component: Contact },
    { command: "projects", component: Projects },
    { command: "experience", component: Experience },
    { command: "skills", component: Skills },
    { command: "", component: null },
  ];

  let selected: Option;
  let props: Props = {};

  // Render the component for the command entered if it exists
  // or else render the Help component with an error message
  $: {
    let opt = options.find((c) => c.command === command);
    if (opt !== undefined) {
      selected = opt;
    } else {
      props.error = `command not found: ${command}`;
      selected = options[0];
    }
  }
</script>

<div>
  <svelte:component this={selected.component} {props} />
</div>
