import { setRequestLocale } from "next-intl/server"
import { Differential } from "@/components/sections/Differential"
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Process } from "@/components/sections/Process"
import { Services } from "@/components/sections/Services"

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <Hero />
      <Problem />
      <Differential />
      <Services />
      <Process />
    </main>
  )
}
