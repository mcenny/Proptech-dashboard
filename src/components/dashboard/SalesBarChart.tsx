"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { salesSeries } from "@/data/dashboard";

const TICKS = [0, 10, 20, 30, 40, 50];

export function SalesBarChart() {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minWidth={0}
      initialDimension={{ width: 360, height: 200 }}
    >
      <BarChart
        data={salesSeries}
        barCategoryGap={14}
        barGap={3}
        margin={{ top: 8, right: 8, bottom: 0, left: 0 }}
      >
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tick={{
            fill: "#919191",
            fontSize: 10,
            fontWeight: 500,
            style: { fontSize: "10px", fill: "#919191" },
          }}
          dy={6}
        />
        <YAxis
          domain={[0, 50]}
          ticks={TICKS}
          tickFormatter={(v: number) => (v === 0 ? "0" : `${v}m`)}
          tickLine={false}
          axisLine={{ stroke: "#e4e4e4", strokeWidth: 1 }}
          tick={{
            fill: "#919191",
            fontSize: 10,
            style: { fontSize: "10px", fill: "#919191" },
          }}
          width={45}
          interval={0}
        />
        <Bar dataKey="blue" fill="#4545FE" barSize={4} />
        <Bar dataKey="green" fill="#12B76A" barSize={4} />
        <Bar dataKey="red" fill="#F04438" barSize={4} />
      </BarChart>
    </ResponsiveContainer>
  );
}
