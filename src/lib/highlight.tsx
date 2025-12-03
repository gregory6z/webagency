import type { ReactNode } from "react"

export function renderHighlight(text: string): ReactNode {
  const parts = text.split(/(<highlight>.*?<\/highlight>)/g)

  return parts.map((part, index) => {
    if (part.startsWith("<highlight>") && part.endsWith("</highlight>")) {
      const content = part.replace(/<\/?highlight>/g, "")
      return (
        <span key={index} className="text-accent">
          {content}
        </span>
      )
    }
    return part
  })
}
