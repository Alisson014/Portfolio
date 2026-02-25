import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import { type ChartConfig } from "@/components/ui/chart"
import { CardDescription, CardTitle } from "@/components/ui/card"

const chartData = [
  { month: "January", skills: 6, certificates: 0, formations: 1, projects: 3 },
  { month: "February", skills: 5, certificates: 2, formations: 0, projects: 4 },
  { month: "March", skills: 7, certificates: 1, formations: 0, projects: 2 },
  { month: "April", skills: 3, certificates: 1, formations: 1, projects: 1 },
  { month: "May", skills: 9, certificates: 3, formations: 0, projects: 0 },
  { month: "June", skills: 4, certificates: 4, formations: 1, projects: 3 },
]

const chartConfig = {
  skills: {
    label: "Skills",
    color: "#3b82f6",
  },
  certificates: {
    label: "Certificados",
    color: "#00bc7d",
  },
  formations: {
    label: "Formações",
    color: "#eab308",
  },
  projects: {
    label: "Projetos",
    color: "#ef4444",
  }
} satisfies ChartConfig

export default function BarGraph(){

    return(
        <div className="w-full h-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700 p-4 rounded-lg dark">
            <header className="mt-0 flex items-center gap-4 mb-2">
                <CardTitle className="text-text text-md sm:text-lg w-fit">Adições</CardTitle>
                <CardDescription className="w-fit text-sm" ><p className="text-sm">Últimos 6 meses</p></CardDescription>
            </header>
            <ChartContainer config={chartConfig} className="h-9/10 min-h-50 w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                    />
                     <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
                     <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="skills" fill="var(--color-skills)" radius={4} />
                    <Bar dataKey="certificates" fill="var(--color-certificates)" radius={4} />
                    <Bar dataKey="formations" fill="var(--color-formations)" radius={4} />
                    <Bar dataKey="projects" fill="var(--color-projects)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    );
}