import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BrandName } from "@/components/brand-name"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/house-bg.jpg"
          alt=""
          fill
          className="object-cover blur-sm scale-105"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
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
          className="items-center text-primary-foreground [&_span]:text-primary-foreground [&_.text-secondary]:text-[#8BC34A]"
        />
        
        <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/90">
          Structured Sober Living Homes
        </p>
        <p className="mt-4 text-pretty text-xl text-primary-foreground md:text-2xl">
          Helping You Get To Where You Need To Go
        </p>
        <p className="mt-6 text-lg font-medium italic text-[#8BC34A]">
          Accountability &bull; Stability &bull; Recovery
        </p>
        <p className="mt-2 text-primary-foreground/80">
          Serving San Bernardino County &amp; High Desert
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/apply">Apply for Housing</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-primary-foreground/70">
          All referrals reviewed within 24 hours
        </p>
      </div>
    </section>
  )
}
