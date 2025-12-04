"use client"

import type React from "react"
import { type ReactNode, useCallback, useEffect, useRef, useState } from "react"

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: "blue" | "purple" | "green" | "red" | "orange"
  size?: "sm" | "md" | "lg"
  width?: string | number
  height?: string | number
  customSize?: boolean
}

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
}

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  size = "md",
  width,
  height,
  customSize = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current) return

    rafRef.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
      rafRef.current = null
    })
  }, [])

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const getSizeClasses = () => {
    if (customSize) return ""
    return sizeMap[size]
  }

  const getInlineStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: "relative",
    }

    if (width !== undefined) {
      baseStyles.width = typeof width === "number" ? `${width}px` : width
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === "number" ? `${height}px` : height
    }

    return baseStyles
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Mouse events are for visual glow effect only
    <div
      ref={cardRef}
      style={getInlineStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`
        ${getSizeClasses()}
        ${!customSize ? "aspect-[3/4]" : ""}
        rounded-2xl
        relative
        grid
        grid-rows-[1fr_auto]
        p-4
        gap-4
        border border-white/10
        bg-white/[0.03]
        transition-colors duration-300
        hover:border-accent/30 hover:bg-white/[0.05]
        ${className}
      `}
    >
      {/* Glow effect - only renders when hovered */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-60 transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(97, 190, 153, 0.15), transparent 60%)`,
          }}
        />
      )}
      {/* Border glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(97, 190, 153, 0.1), transparent 50%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export { GlowCard }
