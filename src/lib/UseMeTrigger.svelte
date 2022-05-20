<script>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
  gsap.registerPlugin(ScrollTrigger)

  const duration = 1

  function useMe(node) {
    const tl = gsap.timeline({})
    tl.from(node.children, {
      duration,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        pin: node.parentElement,
        scrub: 1,
        markers: true,
      },
    })
  }
</script>

<div use:useMe>
  <slot />
</div>

<style lang="scss">
</style>
