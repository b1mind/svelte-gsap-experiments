<script>
  import { animateFrom, animateTo } from '$lib/gsapActions.js'

  export let urlProp
</script>

{#key urlProp}
  <div
    class="intro"
    in:animateFrom={{ x: 300, opacity: 0 }}
    out:animateTo={{ x: -300, opacity: 0 }}
  >
    <slot />
  </div>
{/key}

<style>
  .intro {
    /* position: absolute; */
    grid-area: l;
  }
</style>
