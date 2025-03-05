"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const ParallaxBackground = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 }

  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig)
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig)
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      const offset = 15

      if (ref.current) {
        const elements = (ref.current as HTMLElement).querySelectorAll(".parallax-element")
        elements.forEach((el, index) => {
          const offsetX = moveX * (index + 1) * 0.01
          const offsetY = moveY * (index + 1) * 0.01
          ;(el as HTMLElement).style.transform = `translate(${offsetX}px, ${offsetY}px)`
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={ref} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(var(--color-primary-light), 0.1)" />
            <stop offset="100%" stopColor="rgba(var(--color-primary-dark), 0.1)" />
          </linearGradient>
        </defs>
        <motion.rect
          style={{ y: y1 }}
          className="parallax-element"
          x="20%"
          y="10%"
          width="20%"
          height="20%"
          fill="url(#grad1)"
          rx="15"
        />
        <motion.circle
          style={{ y: y2 }}
          className="parallax-element"
          cx="70%"
          cy="30%"
          r="10%"
          fill="rgba(var(--color-secondary-light), 0.1)"
        />
        <motion.path
          style={{ y: y3 }}
          className="parallax-element"
          d="M50,50 Q60,40 70,50 T90,50"
          stroke="rgba(var(--color-accent), 0.2)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.04]" />
    </div>
  )
}

export default ParallaxBackground

