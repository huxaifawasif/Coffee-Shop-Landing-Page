import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Marquee from "./Marquee"
import { Skiper19 } from "../ui/SvgFollowScroll"

const Homesection3 = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".js-section3-text",
        { autoAlpha: 0, y: 70, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.8,
          stagger: 0.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="flex min-h-screen w-full flex-col bg-black">
      <Marquee />
      <div className="relative">
        <div
          className="js-section3-text absolute top-[40%] z-20 px-4 text-[#E2FC07] sm:top-[50%] md:top-[30%] lg:top-[40%] xl:top-[40%]"
        >
          <p className="text-center text-[#E2FC07] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ">
          Where every cup tells a story, 
        <br />
        and every sip feels like home.
          </p>
        </div>
       
        <div
          className="js-section3-text absolute top-[60%] right-0 z-20 px-4 text-[#E2FC07] sm:top-[60%] md:top-[48%] lg:top-[60%] xl:top-[60%]"
        >
          <p className="text-center text-[#E2FC07] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ">
          Come for the coffee,
          <br />
          Stay for the atmosphere
           <br />
          Your favorite spot is waiting.
          </p>
        </div>

        <Skiper19 />
      </div>
    </section>
  )
}

export default Homesection3