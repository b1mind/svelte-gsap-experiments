import { gsap } from 'gsap'

let duration = 1

export function animateFrom(node, { ...args }) {
  const tl = gsap.timeline({})
  tl.from(node, { duration, ...args })

  return {
    duration: duration * 1000,
    // tick: (t) => {
    //   tl.progress(t)
    // },
    destroy() {
      console.log('do I need destroyed?')
    },
  }
}

export function animateTo(node, { ...args }) {
  const tl = gsap.timeline({})
  tl.to(node, { duration, ...args })

  return {
    duration: duration * 1000,
    // tick: (t, u) => {
    //   tl.progress(u)
    // },
    destroy() {
      console.log('do I need destroyed?')
    },
  }
}
