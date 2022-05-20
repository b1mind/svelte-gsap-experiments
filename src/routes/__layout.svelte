<script context="module">
  // import { page } from '$app/stores'
  export const load = async ({ url }) => ({ props: { url } })
</script>

<script>
  import Transition from '$lib/Transition.svelte'
  import TriggerMe from '$lib/TriggerMe.svelte'

  export let url
</script>

<nav>
  <a href="/">Home</a>
  <a href="/test">Test</a>
</nav>

<main>
  <div>
    <Transition {url}>
      <slot />
    </Transition>
  </div>
</main>

<div>
  <TriggerMe>
    <p>test</p>
    <p>test2</p>
  </TriggerMe>
</div>

<div>
  <TriggerMe>
    <p>test</p>
    <p>test2</p>
  </TriggerMe>
</div>

<style>
  :global(body) {
    margin: 0;
    color: #c1e1c1;
    background: #1b1b1b;
  }

  :global(p) {
    margin: 0;
  }

  a {
    color: #c1e1c1;
  }

  div {
    min-height: 100vh;
    display: grid;
    grid-template-areas: 'l';
    place-items: center;
    overflow: hidden;
  }
</style>
