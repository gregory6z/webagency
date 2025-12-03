"use client"

import { useEffect, useRef, useCallback, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: "blue" | "purple" | "green" | "red" | "orange"
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 152, spread: 0 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
}

export function GlowCard({
  children,
  className = "",
  glowColor = "green",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const lastPos = useRef({ x: 0, y: 0 })

  const updatePosition = useCallback(() => {
    if (cardRef.current) {
      const { x, y } = lastPos.current
      cardRef.current.style.setProperty("--x", x.toFixed(0))
      cardRef.current.style.setProperty("--y", y.toFixed(0))
    }
    rafRef.current = null
  }, [])

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      lastPos.current = { x: e.clientX, y: e.clientY }

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updatePosition)
      }
    }

    document.addEventListener("pointermove", syncPointer, { passive: true })
    return () => {
      document.removeEventListener("pointermove", syncPointer)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updatePosition])

  const { base, spread } = glowColorMap[glowColor]

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-glow]::before {
              pointer-events: none;
              content: "";
              position: absolute;
              inset: -1px;
              border-radius: 16px;
              background: radial-gradient(
                400px 400px at
                calc(var(--x, 0) * 1px)
                calc(var(--y, 0) * 1px),
                hsl(152 60% 45% / 0.4),
                transparent 60%
              );
              background-attachment: fixed;
              mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              mask-composite: exclude;
              padding: 1px;
            }

            [data-glow]::after {
              pointer-events: none;
              content: "";
              position: absolute;
              inset: 0;
              border-radius: 16px;
              background: radial-gradient(
                300px 300px at
                calc(var(--x, 0) * 1px)
                calc(var(--y, 0) * 1px),
                hsl(152 50% 35% / 0.1),
                transparent 50%
              );
              background-attachment: fixed;
            }
          `,
        }}
      />
      <div
        ref={cardRef}
        data-glow
        className={cn(
          "rounded-2xl relative bg-white/[0.02] border border-white/[0.06]",
          className
        )}
      >
        {children}
      </div>
    </>
  )
}
