<script>
  import { page } from '$app/stores'
  import Transition from '/src/lib/Transition.svelte'
</script>

<nav>
  <a href="/">Home</a>
  <a href="/test">Test</a>
</nav>

<main>
  <Transition urlProp={$page.url}>
    <slot />
  </Transition>
</main>

<style>
  main {
    position: relative;
    display: grid;
    grid-template-areas: 'l';
  }
</style>
