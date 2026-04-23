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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", skills: 2, certificates: 1, formations: 1, projects: 2 },
  { month: "February", skills: 3, certificates: 0, formations: 0, projects: 1 },
  { month: "March", skills: 1, certificates: 1, formations: 0, projects: 2 },
  { month: "April", skills: 0, certificates: 2, formations: 0, projects: 0 },
  { month: "May", skills: 2, certificates: 0, formations: 1, projects: 3 },
  { month: "June", skills: 2, certificates: 0, formations: 0, projects: 1 },
]

const chartConfig = {
  skills: {
    label: "skills",
    color: "hsl(207, 90%, 54%)",
  },
  certificates: {
    label: "cartificados",
    color: "hsl(158, 64%, 40%)",
  },
  formations: {
    label: "Formações",
    color: "hsl(53.88, 100%, 61.57%)",
  },
  projects: {
    label: "Projetos",
    color: "hsl(4.11, 89.62%, 58.43%)",
  },
} satisfies ChartConfig

export default function BarGraphStackedtest() {
  return (
    <Card className="w-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700">
      <CardHeader>
          <CardTitle className="text-text text-lg w-fit">Adições</CardTitle>
          <CardDescription className="w-fit" >Últimos 6 meses</CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <ChartContainer config={chartConfig} className="h-37 w-full" >
          <BarChart accessibilityLayer data={chartData} >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="skills"
              stackId="a"
              className="fill-blue-500"
            />
            <Bar
              dataKey="certificates"
              stackId="a"
              className="fill-emerald-500"
              
            />
            <Bar
              dataKey="formations"
              stackId="a"
              className="fill-yellow-500"
              
            />
            <Bar
              dataKey="projects"
              stackId="a"
              className="fill-red-500"
              
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
