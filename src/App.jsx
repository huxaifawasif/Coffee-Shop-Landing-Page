import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Home from './components/Home/Home'
import Preloader from './components/Preloader'
import Cursor from './components/ui/inverted-cursor'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1900)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (isLoading) {
      return
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      timeline
        .fromTo(
          '.js-frame-sequence',
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.9 },
        )
        .fromTo(
          '.js-navbar',
          { autoAlpha: 0, y: -40 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          '-=0.1',
        )
        .fromTo(
          '.js-hero-item',
          { autoAlpha: 0, y: 38 },
          { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.14 },
          '<',
        )
    })

    return () => {
      ctx.revert()
    }
  }, [isLoading])

  return (
    <>
      <Cursor />
      {isLoading ? <Preloader /> : <Home />}
    </>
  )
}

export default App
