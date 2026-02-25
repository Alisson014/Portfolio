import { PolarAngleAxis, PolarGrid, Radar, RadarChart, } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import { type ChartConfig } from "@/components/ui/chart"
import { CardDescription, CardTitle } from "@/components/ui/card"

const chartData = [
  { month: "FullStack", certificate: 186 },
  { month: "Back", certificate: 305 },
  { month: "Programaçaõ", certificate: 237 },
  { month: "Education", certificate: 273 },
  { month: "Front", certificate: 209 },
]
const chartConfig = {
  certificate: {
    label: "Certificados",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function RadarGraph(){

    return(
        <div className="w-full h-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700 p-4 rounded-lg dark">
            <header className="mt-0 flex items-center gap-4 mb-2">
                <CardTitle className="text-text text-lg w-fit">Habilidades</CardTitle>
                <CardDescription className="w-fit" >e especialidades</CardDescription>
            </header>
            <ChartContainer config={chartConfig} className="h-9/10 min-h-50 w-full">
                <RadarChart accessibilityLayer data={chartData}>
                    <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
                    <PolarAngleAxis dataKey="month" />
                    <PolarGrid />
                    <Radar
                        dataKey="certificate"
                        fill="var(--color-certificate)"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ChartContainer>
        </div>
    );
}