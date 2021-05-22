import React, { useState } from "react";
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
import { getRatingAverage } from "../services/data";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function DualBarChart({ vaccine }) {
  const [data, setData] = useState(undefined);
  getRatingAverage("male", (males) => {
    getRatingAverage("female", (females) => {
      var vacData = [];
      for (const key in males[vaccine]) {
        vacData.push({
          name: key,
          M: males[vaccine][key] / males[vaccine]["total"],
          F: females[vaccine][key] / females[vaccine]["total"],
        });
      }
      vacData.pop("total");
      vacData.pop("none_of_the_above");
      setData(vacData);
      console.log(vacData);
    });
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="M" fill="#5D84F4" background={{ fill: "#eee" }} />
        <Bar dataKey="F" fill="#ED6667" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
  );
}
