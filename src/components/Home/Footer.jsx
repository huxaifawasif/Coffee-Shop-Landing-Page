import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function Footer() {
  const footerRef = useRef(null)
  const year = new Date().getFullYear()

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!footerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 1.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".js-footer-y",
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.8,
          stagger: 0.18,
          ease: "power1.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".js-footer-x",
        { x: 50, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.7,
          stagger: 0.16,
          ease: "power1.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-[#d6ff00]/20 bg-black px-6 py-10 text-zinc-200 md:px-12"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="js-footer-y flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="js-footer-x">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d6ff00]">Coffee Shop</p>
            <h2 className="mt-3 max-w-xl text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-white md:text-4xl">
              Brew Better, Waste Less
            </h2>
          </div>
          <a
            href="#"
            className="js-footer-x w-fit rounded-full border border-[#d6ff00]/50 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#d6ff00] transition hover:bg-[#d6ff00] hover:text-black"
          >
            Back to top
          </a>
        </div>

        <div className="js-footer-y grid gap-8 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.16em] md:grid-cols-3">
          <div className="js-footer-x space-y-2">
            <p className="text-zinc-500">Contact</p>
            <p>hello@coffeeshop.com</p>
            <p>Bangkok, Thailand</p>
          </div>

          <div className="js-footer-x space-y-2">
            <p className="text-zinc-500">Explore</p>
            <a href="#" className="block transition hover:text-[#d6ff00]">
              About
            </a>
            <a href="#" className="block transition hover:text-[#d6ff00]">
              Compost Program
            </a>
            <a href="#" className="block transition hover:text-[#d6ff00]">
              Sustainability
            </a>
          </div>

          <div className="js-footer-x space-y-2">
            <p className="text-zinc-500">Social</p>
            <a href="#" className="block transition hover:text-[#d6ff00]">
              Instagram
            </a>
            <a href="#" className="block transition hover:text-[#d6ff00]">
              X / Twitter
            </a>
            <a href="#" className="block transition hover:text-[#d6ff00]">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="js-footer-y border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs">
          <p>© {year} Coffee Shop. Designed for a greener city.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
