import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className="relative mt-[12px] mr-1 text-3xl font-semibold text-white">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}

export const MagicText = ({ text = "" }) => {
  const container = useRef(null)

  const words = text.split(" ").filter(Boolean)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  })

  return (
    <p ref={container} className="relative flex flex-wrap leading-[0.5] p-4">
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length

        return (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

