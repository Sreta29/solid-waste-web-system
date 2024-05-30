"use client";
import React from "react";
import DashboardCard from "../dashboard-card";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "JPSP", value: 37 },
  { name: "JKB", value: 63 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function CollecterCard() {
  return (
    <>
      <DashboardCard
        title="Total Solid Waste: Item"
        subtitle="June 2023"
        body={
          <div className="flex gap-2">
            {/* legend */}
            <div>
              {data.map((item) => (
                <div key={item.name} className="flex items-center gap-1">
                  <div
                    className="w-4 h-4"
                    style={{
                      backgroundColor: COLORS[data.indexOf(item)],
                    }}
                  />
                  <div>{item.name} %</div>
                </div>
              ))}
            </div>
          </div>
        }
        charts={
          <div className="relative">
            <PieChart width={120} height={50}>
              <Pie
                data={data}
                cx={60}
                cy={50}
                startAngle={180}
                endAngle={0}
                innerRadius={40}
                outerRadius={50}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>

            <div className="absolute right-[25%] top-8">
              <h1 className="text-xs">RM9,235</h1>
            </div>
          </div>
        }
      />
    </>
  );
}
