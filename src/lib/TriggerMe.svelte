<script>
  import { onMount, onDestroy } from 'svelte'

  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
  gsap.registerPlugin(ScrollTrigger)

  let target
  const duration = 1

  onMount(() => {
    const tl = gsap.timeline({})
    return tl.from(target.children, {
      duration,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        pin: target.parentElement,
        scrub: 1,
        markers: true,
      },
    })
  })

  onDestroy(() => {
    console.log('destroy or not to destroy that is the question')
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  })
</script>

<div bind:this={target}>
  <slot />
</div>

<style lang="scss">
</style>
