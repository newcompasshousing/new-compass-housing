import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl rounded-2xl bg-accent px-8 py-12 text-center md:px-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tight text-accent-foreground md:text-4xl">
          Ready to Take the Next Step?
        </h2>
        <p className="mt-4 text-accent-foreground/85 md:text-lg">
          Begin your journey toward stability and lasting recovery. Apply today to join our supportive community.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/apply">Apply for Housing</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
