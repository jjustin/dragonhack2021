import { OmitProps } from "antd/lib/transfer/ListBody";
import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { getCounts } from "../services/data";

export default function RadarCustom({ vaccine }) {
  const [data, setData] = useState(undefined);
  getCounts("male", (males) => {
    getCounts("female", (females) => {
      var vacData = [];
      for (const key in males[vaccine]) {
        vacData.push({
          subject: key,
          M: males[vaccine][key] / males[vaccine]["total"],
          F: females[vaccine][key] / females[vaccine]["total"],
        });
      }
      vacData.pop("total");
      vacData.pop("none_of_the_above");
      console.log(vacData);
      setData(vacData);
    });
  });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar dataKey="M" stroke="#39539E" fill="#9E292A" fillOpacity={0.6} />
        <Radar dataKey="F" stroke="#5D84F4" fill="#ED6667" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
