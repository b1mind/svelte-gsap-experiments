<script context="module">
  // import { page } from '$app/stores'
  export const load = async ({ url }) => ({ props: { url } })
</script>

<script>
  import Transition from '/src/lib/Transition.svelte'

  export let url
</script>

<nav>
  <a href="/">Home</a>
  <a href="/test">Test</a>
</nav>

<main>
  <Transition urlProp={url}>
    <slot />
  </Transition>
</main>

<style>
  :global(body) {
    margin: 0;
    height: 300vh;
    background: #1b1b1b;
  }

  :global(p) {
    margin: 0;
  }

  main {
    position: relative;
    min-height: 100vh;
    display: grid;
    grid-template-areas: 'l';
    place-items: center;
    overflow: hidden;
  }
</style>
