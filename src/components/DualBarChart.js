import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DualBarChart({ data, domain, rotation, tickCount }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} angle={rotation} />
        <YAxis domain={domain} tickCount={tickCount} />
        <Tooltip />
        <Legend />
        <Bar dataKey="M" fill="#5D84F4" />
        <Bar dataKey="F" fill="#ED6667" />
      </BarChart>
    </ResponsiveContainer>
  );
}
