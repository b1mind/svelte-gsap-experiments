<script>
  import { onDestroy } from 'svelte'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
  gsap.registerPlugin(ScrollTrigger)

  function triggerMe(node) {
    // ScrollTrigger.create({
    //   trigger: '.timeline',
    //   // pin: true,
    //   animation: gsap.to(node, { opacity: 0 }),
    //   scrub: 1,
    //   start: 'center center',
    //   end: '+=200 center',
    //   markers: true,
    // })
  }

  // onDestroy(() => {
  //   console.log('destroy or not to destroy that is the question')
  //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  // })
</script>

<div class="timeline"><p>STUFF</p></div>

<style>
  p {
    font-size: 10rem;
    background-color: blueviolet;
  }
</style>
