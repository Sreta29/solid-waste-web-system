"use client";
import DashboardCard from "../dashboard-card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const data = [
  { name: "Oversized", value: 200 },
  { name: "Garden", value: 590 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
export default function TotalWaste() {
  return (
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
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      }
      charts={
        <ResponsiveContainer width="100%" height={50}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={20}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      }
    />
  );
}
