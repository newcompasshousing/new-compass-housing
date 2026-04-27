import Link from "next/link"
import Image from "next/image"
import { BrandName } from "@/components/brand-name"
import { Phone, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
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
                className="[&_span]:text-primary-foreground [&_.text-secondary]:text-[#8BC34A]"
              />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Structured Sober Living Provider
            </p>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h3 className="font-semibold text-primary-foreground">Contact Us</h3>
            <a 
              href="tel:7609955694" 
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              (760) 995-5694
            </a>
            <a 
              href="mailto:newcompasshousing@gmail.com" 
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
              newcompasshousing@gmail.com
            </a>
            <a 
              href="https://www.newcompasshousing.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              <Globe className="h-4 w-4" />
              www.newcompasshousing.com
            </a>
          </div>
          
          {/* Service Area */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h3 className="font-semibold text-primary-foreground">Service Area</h3>
            <p className="text-sm text-primary-foreground/80">
              San Bernardino County
            </p>
            <p className="text-sm text-primary-foreground/80">
              High Desert Region
            </p>
          </div>
        </div>
        
        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/80">
            Structured Sober Living Environment. Not a treatment facility.
          </p>
          <p className="mt-2 text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} New Compass Housing LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
