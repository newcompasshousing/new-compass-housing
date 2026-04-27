import { Home, Clock, TestTube, Users, Briefcase, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Calendar,
    title: "Structured Daily Living",
    description: "Consistent routines and expectations to build healthy habits and accountability.",
  },
  {
    icon: Clock,
    title: "Curfew Enforcement",
    description: "Clear boundaries and schedules to support your recovery journey.",
  },
  {
    icon: TestTube,
    title: "Random Testing",
    description: "Regular testing to maintain a safe, substance-free environment for all residents.",
  },
  {
    icon: Users,
    title: "Mandatory Recovery Meetings",
    description: "Required participation in recovery meetings to strengthen your sobriety.",
  },
  {
    icon: Home,
    title: "Peer Support",
    description: "Live alongside others who understand your journey and are committed to recovery.",
  },
  {
    icon: Briefcase,
    title: "Employment Support",
    description: "Resources and guidance to help you find and maintain stable employment.",
  },
]

export function Features() {
  return (
    <section id="about" className="bg-[#e8f4f8] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Program Includes
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Everything you need to build a strong foundation for lasting recovery.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border bg-card shadow-sm transition-shadow hover:shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#1e3a5f]/15">
                  <feature.icon className="h-6 w-6 text-[#1e3a5f]" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
