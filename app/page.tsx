import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { WhoIsItFor } from "@/components/who-is-it-for"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <WhoIsItFor />
        <CTA />
      </main>
      <Footer />
    </>
  )
}