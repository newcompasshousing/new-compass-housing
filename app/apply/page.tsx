import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Apply | New Compass Housing",
  description: "Apply for sober living housing at New Compass Housing. Take the first step toward stability and recovery.",
}

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#e8f4f8] px-6 py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="mb-10 flex items-start gap-4">
            <Image
              src="/images/logo.png"
              alt="New Compass Housing"
              width={60}
              height={60}
              className="h-14 w-auto"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#1e3a5f] md:text-4xl">
                Apply for Housing
              </h1>
              <p className="mt-2 text-muted-foreground">
                Complete the form below to begin your application. We&apos;ll review your information and get back to you within 24 hours.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-card shadow-lg">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfSeg3-F1jVFfqJMqaOxAz2-Rk8YnlGePkTbmtJVjEmxbl6gQ/viewform?embedded=true"
              width="100%"
              height="800"
              className="border-0"
              title="New Compass Housing Application Form"
            >
              Loading...
            </iframe>
          </div>
          
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Having trouble with the form? Contact us directly at{" "}
            <a href="tel:7609955694" className="font-medium text-[#1e3a5f] hover:underline">
              (760) 995-5694
            </a>{" "}
            or{" "}
            <a href="mailto:newcompasshousing@gmail.com" className="font-medium text-[#1e3a5f] hover:underline">
              newcompasshousing@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
