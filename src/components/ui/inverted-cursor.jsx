import { useEffect, useRef, useState } from "react"

export const Cursor = ({ size = 60 }) => {
  const cursorRef = useRef(null)
  const requestRef = useRef(null)
  const previousPos = useRef({ x: -size, y: -size })
  const targetPos = useRef({ x: -size, y: -size })
  const visibleRef = useRef(false)

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const supportsFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia?.("(pointer: fine)")?.matches

    if (!supportsFinePointer) {
      return undefined
    }

    const animate = () => {
      const el = cursorRef.current
      if (!el) {
        requestRef.current = requestAnimationFrame(animate)
        return
      }

      const currentX = previousPos.current.x
      const currentY = previousPos.current.y
      const targetX = targetPos.current.x - size / 2
      const targetY = targetPos.current.y - size / 2

      const newX = currentX + (targetX - currentX) * 0.2
      const newY = currentY + (targetY - currentY) * 0.2

      previousPos.current = { x: newX, y: newY }
      el.style.transform = `translate(${newX}px, ${newY}px)`

      requestRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      if (!visibleRef.current) {
        visibleRef.current = true
        setVisible(true)
      }
      targetPos.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseEnter = () => {
      visibleRef.current = true
      setVisible(true)
    }
    const handleMouseLeave = () => {
      visibleRef.current = false
      setVisible(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.documentElement.addEventListener("mouseenter", handleMouseEnter)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)

    const previousCursor = document.body.style.cursor
    document.body.style.cursor = "none"

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)

      if (requestRef.current) cancelAnimationFrame(requestRef.current)
      document.body.style.cursor = previousCursor || "auto"
    }
  }, [size])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 rounded-full bg-white mix-blend-difference transition-opacity duration-300"
      style={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
      }}
      aria-hidden="true"
    />
  )
}

export default Cursor

