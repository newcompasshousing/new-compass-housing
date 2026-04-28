import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BrandName } from "@/components/brand-name"

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/house-bg.jpg"
          alt=""
          fill
          className="object-cover blur-sm scale-105"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
        <Image
          src="/images/logo.png"
          alt="New Compass Housing Logo"
          width={140}
          height={140}
          className="mx-auto mb-8 h-32 w-auto md:h-40"
          priority
        />

        <BrandName
          size="xl"
          className="items-center text-white [&_span]:text-primary-foreground [&_.text-secondary]:text-[#8BC34A]"
        />

        <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white/90">
          Structured Sober Living Homes
        </p>

        <p className="mt-4 text-pretty text-xl text-white md:text-2xl">
          Helping You Get To Where You Need To Go
        </p>

        <p className="mt-6 text-lg font-medium italic text-white/90">
          Accountability &bull; Stability &bull; Recovery
        </p>

        <p className="mt-2 text-white/80">
          Serving San Bernardino County &amp; High Desert
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-transparent text-white border border-white hover:bg-white hover:text-slate-900"
          >
            <Link href="/apply">Apply for Housing</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white bg-transparent text-white hover:bg-white hover:text-slate-900"
          >
            <Link href="#about">Learn More</Link>
          </Button>
        </div>

        <p className="mt-8 text-sm text-white/70">
          All referrals reviewed within 24 hours
        </p>
      </div>
    </section>
  )
}