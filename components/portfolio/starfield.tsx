"use client"

import { useEffect, useRef } from "react"

/**
 * lightweight animated starfield background (no external images).
 * Renders behind content with absolute positioning. Keep it efficient.
 */
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0

    type Star = { x: number; y: number; z: number; speed: number; size: number }
    const stars: Star[] = []
    const STAR_COUNT = 100

    const resize = () => {
      width = window.innerWidth
      const fullHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight
      )
      height = fullHeight
      canvas.width  = Math.floor(width * DPR)
      canvas.height = Math.floor(height * DPR)
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    const init = () => {
      stars.length = 0
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random(),
          speed: 0.10 + Math.random() * 0.6,
          size: 0.6 + Math.random() * 1.4,
        })
      }
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)
      // subtle vignette background
      const grd = ctx.createRadialGradient(
       width / 2,
       height / 2,
       Math.min(width, height) * 0.1,
       width / 2,
       height / 2,
       Math.max(width, height) * 1.1
      )
      grd.addColorStop(0, "rgba(34, 211, 238, 0.08)") // cyan glow
      grd.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, width, height)

      for (const s of stars) {
        s.y += s.speed
        if (s.y > height) {
          s.y = -2
          s.x = Math.random() * width
          s.speed = 0.10 + Math.random() * 0.6
          s.size = 0.6 + Math.random() * 1.4
        }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(230, 238, 248, 0.8)" // uses foreground tint
        ctx.fill()
      }
      raf = requestAnimationFrame(step)
    }

    const onResize = () => {
      resize()
      init()
    }

    resize()
    init()
    raf = requestAnimationFrame(step)
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 -z-10 w-full h-full"
      style={{ minHeight: '100vh' }}
  />
  )
}
