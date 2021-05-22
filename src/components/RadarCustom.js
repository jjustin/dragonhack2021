import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default function RadarCustom({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar dataKey="M" stroke="#2344A8" fill="#3B69F5" fillOpacity={0.6} />
        <Radar dataKey="F" stroke="#A83634" fill="#F52623" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
