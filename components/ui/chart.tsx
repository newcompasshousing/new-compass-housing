'use client'

import * as React from 'react'

type ChartConfig = Record<string, unknown>

function ChartContainer({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

function ChartTooltip() {
  return null
}

function ChartTooltipContent() {
  return null
}

function ChartLegend() {
  return null
}

function ChartLegendContent() {
  return null
}

function ChartStyle() {
  return null
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}

export type { ChartConfig }
