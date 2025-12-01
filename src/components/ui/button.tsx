"use client"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 cursor-pointer overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--accent)] text-[var(--bg-primary)] font-semibold hover:bg-[var(--accent-hover)]",
        cta: "bg-[var(--accent)] text-[var(--bg-primary)] font-semibold",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-[var(--border-dark)] bg-transparent text-[var(--text-primary)] font-medium hover:border-[var(--text-secondary)] hover:bg-white/5",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm rounded-full gap-2",
        sm: "h-9 px-5 py-2 text-sm rounded-full gap-2",
        lg: "h-12 px-7 py-3 text-base rounded-full gap-3",
        xl: "h-16 pl-10 pr-3 py-3 text-lg rounded-full gap-4",
        // CTA: 52px mobile (thumb-friendly), 64px desktop
        cta: "h-[52px] sm:h-16 pl-8 sm:pl-10 pr-2 sm:pr-3 py-3 text-base sm:text-[18px] rounded-full",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

// Ícone de seta para direita - 16x16 como no original
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7.37642 13.2003L6.05966 11.8963L10.0036 7.95241H0.421875V6.04758H10.0036L6.05966 2.11008L7.37642 0.799713L13.5767 7L7.37642 13.2003Z"
        fill="currentColor"
      />
    </svg>
  )
}

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    withArrow?: boolean
    withPing?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  withArrow = false,
  withPing = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  const isCTA = variant === "cta"

  // Se for variante CTA com seta, usa layout especial
  if (isCTA && withArrow) {
    return (
      <button
        data-slot="button"
        className={cn(buttonVariants({ variant, size: "cta", className }), "group")}
        {...props}
      >
        {/* Ping effect */}
        {withPing && (
          <span
            className="absolute inset-0 rounded-full animate-ping bg-[var(--accent)]/40 opacity-75"
            style={{ animationDuration: "2s" }}
          />
        )}

        <span className="relative z-10 flex items-center gap-4 sm:gap-8">
          <span className="font-semibold">{children}</span>

          {/* Círculo com seta - 36px mobile, 40px desktop */}
          <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-primary)]">
            <ArrowIcon className="text-[var(--text-primary)] transition-transform duration-300 group-hover:-rotate-45" />
          </span>
        </span>
      </button>
    )
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }), "group")}
      {...props}
    >
      {/* Ping effect */}
      {withPing && variant === "default" && (
        <span
          className="absolute inset-0 rounded-full animate-ping bg-[var(--accent)]/40 opacity-75"
          style={{ animationDuration: "2s" }}
        />
      )}

      <span className="relative z-10 flex items-center gap-3">
        {children}
        {withArrow && !isCTA && (
          <span className="flex items-center justify-center size-6 rounded-full bg-[var(--bg-primary)] transition-all duration-300">
            <ArrowIcon className="w-3 h-3 text-[var(--accent)]" />
          </span>
        )}
      </span>
    </Comp>
  )
}

export { Button, buttonVariants }
