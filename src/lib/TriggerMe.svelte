<script>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
  import { onDestroy } from 'svelte'
  import { onMount } from 'svelte'
  gsap.registerPlugin(ScrollTrigger)

  let target
  const duration = 1

  onMount(() => {
    console.dir(target)
    const tl = gsap.timeline({})
    return tl.to(target, {
      duration,
      opacity: 1,
      scrollTrigger: {
        target: '.timeline',
        scrub: 1,
        markers: true,
        start: 'center center',
        end: '+=3000 center',
      },
    })
  })

  onDestroy(() => {
    console.log('destroy or not to destroy that is the question')
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  })
</script>

<header class="timeline" bind:this={target}>
  <div>
    <slot />
  </div>
</header>

<style lang="scss">
</style>
