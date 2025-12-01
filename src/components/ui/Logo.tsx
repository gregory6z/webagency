import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
}

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/20",
        sizes[size],
        className,
      )}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[70%] h-[70%]"
        role="img"
        aria-label="WebAgence Logo"
      >
        {/* Monitor/Screen frame */}
        <rect
          x="4"
          y="6"
          width="32"
          height="22"
          rx="3"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          className="text-[var(--bg-primary)]"
        />
        {/* Monitor stand */}
        <path
          d="M16 28L14 34H26L24 28"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--bg-primary)]"
        />
        {/* W letter inside screen */}
        <path
          d="M10 12L14 22L20 14L26 22L30 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--bg-primary)]"
        />
      </svg>
    </div>
  )
}

// Variação alternativa: W estilizado como código/brackets
export function LogoCode({ className, size = "md" }: LogoProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/20",
        sizes[size],
        className,
      )}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[75%] h-[75%]"
        role="img"
        aria-label="WebAgence Logo"
      >
        {/* Left bracket < */}
        <path
          d="M8 12L4 20L8 28"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--bg-primary)]"
        />
        {/* Right bracket > */}
        <path
          d="M32 12L36 20L32 28"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--bg-primary)]"
        />
        {/* W in center */}
        <path
          d="M12 12L15.5 26L20 16L24.5 26L28 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--bg-primary)]"
        />
      </svg>
    </div>
  )
}

// Variação: W com cursor/ponteiro
export function LogoCursor({ className, size = "md" }: LogoProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/20",
        sizes[size],
        className,
      )}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[75%] h-[75%]"
        role="img"
        aria-label="WebAgence Logo"
      >
        {/* W letter */}
        <path
          d="M6 10L11 28L20 16L29 28L34 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--bg-primary)]"
        />
        {/* Cursor pointer */}
        <path
          d="M28 22L28 34L31 31L34 37L36 36L33 30L37 30L28 22Z"
          fill="currentColor"
          className="text-[var(--bg-primary)]"
        />
      </svg>
    </div>
  )
}

// Variação: W minimalista com barra de navegador
export function LogoBrowser({ className, size = "md" }: LogoProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/20",
        sizes[size],
        className,
      )}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[70%] h-[70%]"
        role="img"
        aria-label="WebAgence Logo"
      >
        {/* Browser window */}
        <rect
          x="4"
          y="6"
          width="32"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          className="text-[var(--bg-primary)]"
        />
        {/* Browser top bar */}
        <line
          x1="4"
          y1="13"
          x2="36"
          y2="13"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[var(--bg-primary)]"
        />
        {/* Browser dots */}
        <circle cx="9" cy="9.5" r="1.5" fill="currentColor" className="text-[var(--bg-primary)]" />
        <circle cx="14" cy="9.5" r="1.5" fill="currentColor" className="text-[var(--bg-primary)]" />
        <circle cx="19" cy="9.5" r="1.5" fill="currentColor" className="text-[var(--bg-primary)]" />
        {/* W inside */}
        <path
          d="M10 18L14 30L20 22L26 30L30 18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--bg-primary)]"
        />
      </svg>
    </div>
  )
}
