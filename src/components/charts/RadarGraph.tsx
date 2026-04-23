import { PolarAngleAxis, PolarGrid, Radar, RadarChart, } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import { type ChartConfig } from "@/components/ui/chart"
import { CardDescription, CardTitle } from "@/components/ui/card"

import { SkillsType } from "../mockedData/MockedData"

type dataType = {
    ability: string,
}

type RadarGraphType = {
    Skills: Array<SkillsType>
}

export default function RadarGraph( { Skills } : RadarGraphType ){

    function counter(data : Array<dataType>, type : string ){
        return data.reduce((acc, curr) => {
            return curr.ability == type ? acc+1 : acc;
        }, 0);
    }

    const chartData = [
        { ability: "FullStack", count: counter(Skills, "Front") + counter(Skills, "Back") },
        { ability: "Back", count: counter(Skills, "Back") },
        { ability: "Programação", count: counter(Skills, "Programação") },
        { ability: "Educação", count: counter(Skills, "Educação") },
        { ability: "Front", count: counter(Skills, "Front") },
    ]
    const chartConfig = {
        count: {
            label: "Habilidades",
            color: "var(--chart-1)",
        },
    } satisfies ChartConfig

    return(
        <div className="w-full h-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700 p-4 rounded-lg dark">
            <header className="mt-0 flex items-center gap-4 mb-2">
                <CardTitle className="text-text text-lg w-fit">Habilidades</CardTitle>
                <CardDescription className="w-fit" >e especialidades</CardDescription>
            </header>
            <ChartContainer config={chartConfig} className="h-9/10 min-h-50 w-full">
                <RadarChart accessibilityLayer data={chartData}>
                    <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
                    <PolarAngleAxis dataKey="ability" />
                    <PolarGrid />
                    <Radar
                        dataKey="count"
                        fill="var(--color-count)"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ChartContainer>
        </div>
    );
}