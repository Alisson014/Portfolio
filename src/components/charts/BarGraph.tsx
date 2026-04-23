
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import { type ChartConfig } from "@/components/ui/chart"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { CertificatesType, FormationType, ProjectsType, SkillsType } from "../mockedData/MockedData"

type BarGraphType = {
    Skills: Array<SkillsType>,
    Certificates: Array<CertificatesType>,
    Formation: Array<FormationType>,
    Projects: Array<ProjectsType>,
}

type dataType = {
    addedAt: string,
  }


export default function BarGraph( { Certificates, Formation, Projects, Skills } : BarGraphType ){
    const time = new Date();
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    
    

    function getTargetYearMonth(offset: number) {
        const d = new Date(time.getFullYear(), time.getMonth() - offset, 1);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        return `${year}-${month}`;
    }

    function counter(data: Array<dataType>, offset: number) {
        const targetYM = getTargetYearMonth(offset);
        
        return data.reduce((acc, curr) => {
            return curr.addedAt.startsWith(targetYM) ? acc + 1 : acc;
        }, 0);
    }
    
    const chartData = []
    for (let i = 0; i < 4; i++){
      chartData.push(
        {
          month: months.at(time.getMonth() - i),
          skills: counter(Skills, i),
          certificates: counter(Certificates, i),
          formations: counter(Formation, i),
          projects: counter(Projects, i),
        }
      )
    }


    chartData.reverse();

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


    return(
        <div className="w-full h-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700 p-4 rounded-lg dark">
            <header className="mt-0 flex items-center gap-4 mb-2">
                <CardTitle className="text-text text-md sm:text-lg w-fit">Adições</CardTitle>
                <CardDescription className="w-fit text-sm" ><p className="text-sm">Últimos 4   meses</p></CardDescription>
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