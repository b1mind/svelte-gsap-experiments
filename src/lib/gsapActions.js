import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

let duration = 1

export function triggerMe(node, { ...args }) {
  ScrollTrigger.create({
    trigger: node,
    stagger: 0.5,
    pin: node.parentNode,
    scrub: true,
    animation: gsap.to(node.children, { ...args }),
  })
}

export function animateFrom(node, { ...args }) {
  gsap.set(node, { opacity: 0 })
  const tl = gsap.timeline({})
  console.dir(node)
  tl.fromTo(node, { opacity: 0, x: 600 }, { opacity: 1, x: 0 })
  tl.from(node.children, {
    scrollTrigger: {
      pin: node.parentNode,
      scrub: true,
      // markers: true,
    },
    ...args,
  })

  return {
    duration: duration * 1000,
    tick: (t) => {
      tl.progress(t)
    },
    destroy() {
      console.log('do I need destroyed?')
    },
  }
}

export function animateTo(node, { ...args }) {
  const tl = gsap.timeline({})
  tl.to(node, { opacity: 0, x: -600 })

  return {
    duration: duration * 1000,
    tick: (t, u) => {
      tl.progress(u)
    },
    destroy() {
      console.log('do I need destroyed?')
    },
  }
}
