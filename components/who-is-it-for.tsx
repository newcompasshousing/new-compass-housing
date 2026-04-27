import { CheckCircle2, AlertCircle, Bed } from "lucide-react"

const whoWeServe = [
  "Adult men recently discharged from treatment",
  "Individuals on probation or parole",
  "Those seeking a stable, drug-free environment",
  "Clients completing treatment or court-referred",
]

const requirements = [
  "Must be sober upon entry",
  "Willing to follow house rules",
  "Able to live independently",
  "No violent offenses",
]

export function WhoIsItFor() {
  return (
    <section className="bg-muted px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Who We Serve */}
          <div className="rounded-xl bg-card p-8 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Who We Serve
            </h2>
            <ul className="mt-6 space-y-4">
              {whoWeServe.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Admission Requirements */}
          <div className="rounded-xl bg-card p-8 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Admission Requirements
            </h2>
            <ul className="mt-6 space-y-4">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Beds Available */}
          <div className="rounded-xl bg-secondary p-8 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Bed className="h-8 w-8 text-secondary-foreground" />
              <h2 className="text-xl font-bold tracking-tight text-secondary-foreground">
                Beds Available
              </h2>
            </div>
            <p className="mt-6 text-secondary-foreground/90">
              Immediate placement may be available upon approval. Ideal for clients completing treatment or court-referred.
            </p>
            <p className="mt-4 text-sm font-medium text-secondary-foreground">
              All referrals reviewed within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
