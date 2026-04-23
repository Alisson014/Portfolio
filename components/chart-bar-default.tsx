"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 6 },
  { month: "February", desktop: 5 },
  { month: "March", desktop: 7 },
  { month: "April", desktop: 3 },
  { month: "May", desktop: 9 },
  { month: "June", desktop: 4 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function BarGraph() {
  return (
    <Card className="w-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700">
      <CardHeader>
          <CardTitle className="text-text text-lg w-fit">Adições</CardTitle>
          <CardDescription className="w-fit" >Últimos 6 meses</CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <ChartContainer config={chartConfig} className="h-37 w-full">
          <BarChart accessibilityLayer data={chartData} >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            /> 
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" className="fill-blue-500" radius={8}  />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
