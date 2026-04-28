import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BrandName } from "@/components/brand-name"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="New Compass Housing"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
          <BrandName
            size="sm"
            showHousing={false}
            lightMode
            className="hidden sm:flex"
          />
        </Link>

        <nav className="flex items-center gap-4">
          <a
            href="tel:7609955694"
            className="hidden items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-700 md:flex"
          >
            <Phone className="h-4 w-4" />
            (760) 995-5694
          </a>

          <Link
            href="#about"
            className="hidden text-sm font-medium text-slate-900 hover:text-slate-700 lg:block"
          >
            About
          </Link>

          <Button
            asChild
            size="sm"
            className="bg-slate-900 text-white hover:bg-slate-800"
          >
            <Link href="/apply">Apply Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}