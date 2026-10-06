import { useEffect, useMemo, useRef, useState } from 'react'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

const frameModules = import.meta.glob('../../assets/VideoFrames/frame-*.png', {
  eager: true,
  import: 'default',
})

const sortedFrames = Object.entries(frameModules)
  .sort((a, b) => {
    const aIndex = Number(a[0].match(/frame-(\d+)\.png$/)?.[1] ?? 0)
    const bIndex = Number(b[0].match(/frame-(\d+)\.png$/)?.[1] ?? 0)
    return aIndex - bIndex
  })
  .map(([, src]) => src)

function FrameSequenceBackground({ children }) {
  const containerRef = useRef(null)
  const rafRef = useRef(null)
  const targetProgressRef = useRef(0)
  const smoothProgressRef = useRef(0)
  const [currentFrame, setCurrentFrame] = useState(0)

  const frames = useMemo(() => sortedFrames, [])

  useEffect(() => {
    if (!frames.length) {
      return undefined
    }

    frames.forEach((frameSrc) => {
      const image = new Image()
      image.src = frameSrc
    })

    return undefined
  }, [frames])

  useEffect(() => {
    const container = containerRef.current

    if (!container || !frames.length) {
      return undefined
    }

    const startFrameIndex = Math.min(14, frames.length - 1)
    const endFrameIndex = Math.min(99, frames.length - 1)

    const updateTargetProgress = () => {
      const rect = container.getBoundingClientRect()
      // Complete the sequence by the time user reaches section 3's first viewport.
      // This keeps frame progression stable even if later sections are very tall.
      const sequenceScrollDistance = Math.max(window.innerHeight * 3, 1)
      const distanceScrolled = clamp(-rect.top, 0, sequenceScrollDistance)
      targetProgressRef.current = clamp(distanceScrolled / sequenceScrollDistance, 0, 1)
    }

    const animate = () => {
      const delta = targetProgressRef.current - smoothProgressRef.current
      smoothProgressRef.current =
        Math.abs(delta) < 0.0004
          ? targetProgressRef.current
          : smoothProgressRef.current + delta * 0.22

      const frameIndex =
        startFrameIndex +
        Math.round(smoothProgressRef.current * (endFrameIndex - startFrameIndex))
      setCurrentFrame((previousFrame) =>
        previousFrame === frameIndex ? previousFrame : frameIndex,
      )

      rafRef.current = requestAnimationFrame(animate)
    }

    updateTargetProgress()
    rafRef.current = requestAnimationFrame(animate)

    window.addEventListener('scroll', updateTargetProgress, { passive: true })
    window.addEventListener('resize', updateTargetProgress)

    return () => {
      window.removeEventListener('scroll', updateTargetProgress)
      window.removeEventListener('resize', updateTargetProgress)

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [frames])

  const currentFrameSrc = frames[currentFrame]

  return (
    <div ref={containerRef} className="relative min-h-[200vh] bg-black">
      <div className="js-frame-sequence sticky top-0 h-screen overflow-hidden">
        {currentFrameSrc && (
          <img
            src={currentFrameSrc}
            alt="Coffee frame animation background"
            className="h-full w-full object-cover"
            draggable={false}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 -mt-[100vh]">{children}</div>
    </div>
  )
}

export default FrameSequenceBackground
