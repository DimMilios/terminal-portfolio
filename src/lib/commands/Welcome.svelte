<script>
  let name = `
 _ _                                  _    _
|  _ \\(_)_ __ ___ (_) |_ _ __(_)___  |  \\/  (_) (_) ___  ___ 
| | | | | '_ \` _ \\| | __| '__| / __| | |\\/| | | | |/ _ \\/ __|
| |_| | | | | | | | | |_| |  | \\__ \\ | |  | | | | | (_) \\__ \\
|____/|_|_| |_| |_|_|\\__|_|  |_|___/ |_|  |_|_|_|_|\\___/|___/
`;
</script>

<div>
  <p class="name">{name}</p>
  <div>Welcome to my terminal portfolio!</div>
  ----
  <div>
    The source code for this project can be found in this <a
      href="https://github.com/DimMilios/portfolio"
      class="link-secondary"
      target="_blank">GitHub repository</a
    >.
  </div>
  ----
  <p>
    For a list of all available commands type `<span class="text-primary"
      >help</span
    >`.
  </p>
</div>

<style>
  .name {
    white-space: pre;
  }

  @media screen and (max-width: 450px) {
    .name {
      font-size: 9px;
    }
  }
</style>
