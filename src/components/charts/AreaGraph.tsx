import { CardDescription, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { VisitorType } from "../mockedData/MockedData";

type dataType = {
    accessedAt: string,
    isDesktop: boolean,
}

type AreaGraphType = {
    Visitors: Array<VisitorType>,
}

export default function AreaGraph( { Visitors } : AreaGraphType ){
    const time = new Date();
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    function getTargetYearMonth(offset: number) {
        const d = new Date(time.getFullYear(), time.getMonth() - offset, 1);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        return `${year}-${month}`;
    }

    function counter(data: Array<dataType>, offset: number,type : boolean) {
        const targetYM = getTargetYearMonth(offset);
        
        return data.reduce((acc, curr) => {
            
            return curr.accessedAt.startsWith(targetYM) && curr.isDesktop == type  ? acc + 1 : acc;
        }, 0);
    }

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    } satisfies ChartConfig

    const chartData = [];

    for (let i = 0; i < 4; i++){
      chartData.push(
        {
          month: months.at(time.getMonth() - i),
          desktop: counter(Visitors, i, true),
          mobile: counter(Visitors, i, false),
        }
      )
    }
    chartData.reverse();

    return(
        <div className="w-full h-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700 p-4 rounded-lg dark">
            <header className="mt-0 flex items-center gap-4 mb-2">
                <CardTitle className="text-text text-lg w-fit">Visitantes</CardTitle>
                <CardDescription className="w-fit" >Últimos 4 meses</CardDescription>
            </header>
            <ChartContainer config={chartConfig} className="min-h-40 h-50 w-full">
                <AreaChart accessibilityLayer data={chartData}>
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

                    <defs>
                        <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                            <stop
                            offset="5%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.8}
                            />
                            <stop
                            offset="95%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.1}
                            />
                        </linearGradient>
                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                            <stop
                            offset="5%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.8}
                            />
                            <stop
                            offset="95%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>
                    <Area
                        dataKey="mobile"
                        type="natural"
                        fill="url(#fillMobile)"
                        fillOpacity={0.4}
                        stroke="var(--color-mobile)"
                        stackId="a"
                    />
                    <Area
                        dataKey="desktop"
                        type="natural"
                        fill="url(#fillDesktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    );
}