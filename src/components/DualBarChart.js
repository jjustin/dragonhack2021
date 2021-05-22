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

export default function DualBarChart({ vaccine }) {
  const [data, setData] = useState(undefined);
  if (data == undefined) {
    getRatingAverage("male", (males) => {
      getRatingAverage("female", (females) => {
        var vacData = [];
        const yesyes = [
          "Chills",
          "Headache",
          "Nausea",
          "Pain at Point",
          "Fatigue",
          "Body Aches",
        ];
        console.log("yesyes", yesyes);
        for (const key of yesyes) {
          vacData.push({
            name: key,
            M: males[vaccine][key],
            F: females[vaccine][key],
          });
        }
        setData(vacData);
        console.log(vacData);
      });
    });
  }

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
        <Bar dataKey="M" fill="#5D84F4" />
        <Bar dataKey="F" fill="#ED6667" />
      </BarChart>
    </ResponsiveContainer>
  );
}
