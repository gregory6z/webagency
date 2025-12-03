import { setRequestLocale } from "next-intl/server"
import { Footer } from "@/components/layout/Footer"
import { Conversion } from "@/components/sections/Conversion"
import { CtaFinal } from "@/components/sections/CtaFinal"
import { Hero } from "@/components/sections/Hero"
import { Process } from "@/components/sections/Process"
import { Services } from "@/components/sections/Services"
import { SocialProof } from "@/components/sections/SocialProof"
import { Solution } from "@/components/sections/Solution"
import { MobileCtaBar } from "@/components/ui/MobileCtaBar"

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <Hero />
      <Solution />
      <Services />
      <Conversion />
      <Process />
      <SocialProof />
      <CtaFinal />
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
