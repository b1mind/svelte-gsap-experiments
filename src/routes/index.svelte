<script>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
  import { onDestroy } from 'svelte'
  import { onMount } from 'svelte'
  gsap.registerPlugin(ScrollTrigger)

  let target
  const duration = 1
  const tl = gsap.timeline({})

  onMount(() => {
    tl.from(target, { x: 600 })

    ScrollTrigger.create({
      trigger: '.timeline',
      // pin: true,
      animation: tl,
      scrub: 1,
      start: 'center center',
      end: '+=200 top',
      markers: true,
    })
  })

  onDestroy(() => {
    console.log('destroy or not to destroy that is the question')
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  })
</script>

<div class="timeline"><p bind:this={target}>STUFF</p></div>

<style>
  p {
    font-size: 10rem;
    background-color: blueviolet;
  }
</style>
