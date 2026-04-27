"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, this would submit to a backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="border-border/50 bg-card">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-card-foreground">Application Submitted</h2>
          <p className="mt-3 text-muted-foreground">
            Thank you for your application. We&apos;ll review your information and contact you within 2-3 business days.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border/50 bg-card">
      <CardHeader>
        <CardTitle>Application Form</CardTitle>
        <CardDescription>
          Please provide accurate information. All fields are required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sobrietyDate">Sobriety Date</Label>
            <Input id="sobrietyDate" name="sobrietyDate" type="date" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employment">Current Employment Status</Label>
            <Input id="employment" name="employment" placeholder="e.g., Employed, Seeking work, Starting new job" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="situation">Tell us about your situation</Label>
            <Textarea 
              id="situation" 
              name="situation" 
              rows={4}
              placeholder="Share a bit about your recovery journey and why you're seeking sober living housing..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals">What are your recovery goals?</Label>
            <Textarea 
              id="goals" 
              name="goals" 
              rows={3}
              placeholder="What do you hope to achieve while staying with us?"
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
