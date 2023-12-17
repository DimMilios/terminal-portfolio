<script lang="ts">
  import TextIcon from '../components/TextIcon.svelte';
</script>

<div>
  <h3 class="header">MusiCoLab - VHVCoLab</h3>
  <p class="wall">
    Created a fork of an open source music score rendering project (Verovio
    Humdrum Viewer).
  </p>
  <p class="wall">
    Updated the build system from static site generation to using Vite; which
    was more suitable for our needs.
  </p>
  <p class="wall">
    Incorporated the Yjs WebSocket connection provider to streamline the process
    of creating and joining collaboration rooms.
  </p>
  <p class="wall">
    Developed synchronous collaboration features for participants within a room,
    including concurrent music score editing, highlighting of note selections,
    and a near real-time action history log.
  </p>
</div>

<div>
  <h3 class="header">MusiCoLab - Playalong</h3>
  <p class="wall">
    Extended Playalong -a bachelor thesis project- with synchronous
    collaboration capabilities leveraging Yjs.
  </p>
  <p class="wall">
    Implemented remote propagation of microphone recordings functionality
    through the WebSocket connection.
  </p>
  <p class="wall">Implemented user awareness features (who does what).</p>
</div>

<div>
  <h3 class="header">MusiCoLab - WebSocket Server</h3>
  <p class="wall">
    Developed a Yjs WebSocket server for VHVCoLab and Playalong front end apps
    using <TextIcon
      image={{
        src: '/icons/nodejs.svg',
        alt: 'node.js logo',
        width: 22,
        height: 22,
      }}
      text="Node.js"
    />.
  </p>

  <p class="wall">Implemented REST API endpoints.</p>
  <p class="wall">
    Was responsible for the deployment and maintenance of the WebSocket server
  </p>
</div>

<style>
  .header {
    color: var(--text-color-100);
    font-weight: 700;
    font-size: inherit;
    margin: 0;
  }

  .wall {
    max-width: 80ch;
    margin-block-start: 0;
  }
</style>
