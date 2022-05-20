<script>
  import { animateFrom, animateTo } from '$lib/gsapActions.js'
  import { onMount } from 'svelte'

  export let url
  const animation = {
    rotate: 360,
    stagger: 0.5,
  }
  let first = true

  onMount(() => {
    first = false
  })
</script>

{#if first}
  <div class="intro" use:animateFrom={{ ...animation }}>
    <slot />
  </div>
{:else}
  {#key url}
    <div class="intro" in:animateFrom={{ ...animation }} out:animateTo>
      <slot />
    </div>
  {/key}
{/if}

<style>
  .intro {
    /* position: absolute; */
    grid-area: l;
  }
</style>
