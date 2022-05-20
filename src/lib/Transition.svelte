<script>
  import { animateFrom, animateTo } from '$lib/gsapActions.js'
  import { onMount } from 'svelte'

  export let url
  let first = true

  onMount(() => {
    first = false
  })
</script>

{#if first}
  <div class="intro" use:animateFrom={{ rotate: 360 }}>
    <slot />
  </div>
{:else}
  {#key url}
    <div class="intro" in:animateFrom out:animateTo>
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
