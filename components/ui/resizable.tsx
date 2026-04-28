"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex h-full w-full", className)} {...props}>
      {children}
    </div>
  )
}

function ResizablePanel({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex-1", className)} {...props}>
      {children}
    </div>
  )
}

function ResizableHandle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  withHandle?: boolean
}) {
  return <div className={cn("w-px bg-border", className)} {...props} />
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }