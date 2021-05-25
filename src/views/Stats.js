import "./stats.css";
import VaxColumn from "../components/VaxColumn";
import React, { useEffect, useState } from "react";
import getRadarData from "../services/radarData";
import getDualColumnData, { getFeverData } from "../services/dualColumnData";
import { getCounts, getRatingAverage } from "../services/data";
import { Spin } from "antd";

const vaccines = [
  "Janssen / Johnson & Johnson",
  "Comirnaty (Pfizer-BioNTech)",
  "Moderna",
  "Oxford-AstraZeneca",
];

export default function Stats() {
  const [malesCount, setMalesCount] = useState(undefined);
  const [femalesCount, setFemalesCount] = useState(undefined);
  const [malesRatingAverage, setMalesRatingAverage] = useState(undefined);
  const [femalesRatingAverage, setFemalesRatingAverage] = useState(undefined);

  useEffect(() => {
    if (malesRatingAverage === undefined)
      getRatingAverage("male", setMalesRatingAverage);
    else if (malesCount === undefined) getCounts("male", setMalesCount);
    else if (femalesRatingAverage === undefined)
      getRatingAverage("female", setFemalesRatingAverage);
    else if (femalesCount === undefined) getCounts("female", setFemalesCount);
  }, [malesRatingAverage, malesCount, femalesRatingAverage, femalesCount]);

  // Radar data
  const [data1, setData1] = useState({ vacc: "Choose vaccine" });
  const [data2, setData2] = useState({ vacc: "Choose vaccine" });
  const [data3, setData3] = useState({ vacc: "Choose vaccine" });

  function getData(vacc) {
    var radar = getRadarData(vacc, malesCount, femalesCount);
    var dc = getDualColumnData(vacc, malesRatingAverage, femalesRatingAverage);
    var fev = getFeverData(vacc, malesRatingAverage, femalesRatingAverage);
    return { vacc, radar, dc, fev };
  }

  if (
    malesCount === undefined ||
    malesRatingAverage === undefined ||
    femalesCount === undefined ||
    femalesRatingAverage === undefined
  ) {
    return <Spin className="loading" size="large" />;
  }

  if (data1.vacc === "Choose vaccine") {
    setData1(getData(vaccines[0]));
  }
  if (data2.vacc === "Choose vaccine") {
    setData2(getData(vaccines[1]));
  }
  if (data3.vacc === "Choose vaccine") {
    setData3(getData(vaccines[2]));
  }
  return (
    <div className="statsView">
      <VaxColumn
        vacc={data1.vacc}
        vaccines={vaccines}
        setVacc={(v) => setData1(getData(v))}
        dataDC={data1.dc}
        dataRadar={data1.radar}
        dataFever={data1.fev}
      />
      <VaxColumn
        vacc={data2.vacc}
        vaccines={vaccines}
        setVacc={(v) => setData2(getData(v))}
        dataDC={data2.dc}
        dataRadar={data2.radar}
        dataFever={data2.fev}
      />
      {/* <VaxColumn
        vacc={data3.vacc}
        vaccines={vaccines}
        setVacc={(v) => setData3(getData(v))}
        dataDC={data3.dc}
        dataRadar={data3.radar}
        dataFever={data3.fev}
      /> */}
    </div>
  );
}
