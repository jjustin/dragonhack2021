import "./stats.css";
import LineGraph from "../components/LineGraph";
import RadarCustom from "../components/RadarCustom";
import { getData } from "../services/data";
import { useEffect, useState } from "react";
import { Spin } from "antd";

export default function Stats() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    if (!data) {
      getData((r) => {
        setData(r);
      });
    }
  });
  console.log(data);
  if (!data) {
    return <Spin className="loading" size="large" />;
  }
  return (
    <div className="statsView">
      <div className="lineGraph graph">
        <LineGraph />
      </div>
      <div className="radarGraph graph">
        <RadarCustom data={vaxxDistribution(data)} />
      </div>
    </div>
  );
}

function vaxxDistribution({ data }) {
  var data = data.slice(1);
  var out = {};
  for (var entry of data) {
    console.log(entry);
    if (entry[4] == "No" || entry[32] == "Partially Completed") {
      continue;
    }

    if (!out[entry[5]]) {
      out[entry[5]] = 0;
    }
    out[entry[5]]++;
  }

  var x = Object.keys(out).map((k) => {
    return { vaxx: k, count: out[k] };
  });

  console.log(x, out);
  return x;
}
