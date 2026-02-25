'use client';

import { Label, Pie, PieChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import { type ChartConfig } from "@/components/ui/chart"
import { CardDescription, CardTitle } from "@/components/ui/card"
import React from "react";

const chartData = [
  { skill: "hard", count: 6, fill: "var(--color-hard)" },
  { skill: "soft", count: 5, fill: "var(--color-soft)" },
]

const chartConfig = {
  hard: {
    label: "Hard skills",
    color: "#3b82f6",
  },
  soft: {
    label: "Soft skills",
    color: "#eaf3ff",
  },
} satisfies ChartConfig

export default function PizzaGraph(){
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.count, 0)
    }, [])

    return(
        <div className="w-full h-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700 p-4 rounded-lg dark">
            <header className="mt-0 flex items-center flex-wrap gap-x-4 mb-2">
                <CardTitle className="text-text text-lg w-fit">Balanceamento</CardTitle>
                <CardDescription className="w-fit" >Hard x Soft</CardDescription>
            </header>
            <ChartContainer config={chartConfig} className="min-h-50 w-full">
                <PieChart accessibilityLayer data={chartData}>
                    <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
                    <Pie
                        data={chartData}
                        dataKey="count"
                        nameKey="skill"
                        innerRadius={60}
                        strokeWidth={5}
                        >
                        <Label
                            content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                >
                                    <tspan
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    className="fill-foreground text-3xl font-bold"
                                    >
                                    {totalVisitors.toLocaleString()}
                                    </tspan>
                                    <tspan
                                    x={viewBox.cx}
                                    y={(viewBox.cy || 0) + 24}
                                    className="fill-muted-foreground"
                                    >
                                    Skills
                                    </tspan>
                                </text>
                                )
                            }
                            }}
                        />
                        </Pie>
                </PieChart>
            </ChartContainer>
        </div>
    );
}