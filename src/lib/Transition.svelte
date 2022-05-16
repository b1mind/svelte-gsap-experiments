<script>
  import { fly, slide } from 'svelte/transition'

  export let urlProp
</script>

{#key urlProp}
  <div
    in:fly={{ x: -100, duration: 2050, delay: 300 }}
    out:fly={{ x: -100, duration: 2050 }}
  >
    <slot />
  </div>
{/key}

<style>
  div {
    position: absolute;
    grid-area: l;
  }
</style>
