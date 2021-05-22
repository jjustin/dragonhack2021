import "./stats.css";
import VaxColumn from "../components/VaxColumn";
import React, { useState } from "react";
import getRadarData from "../services/radarData";
import getDualColumnData, { getFeverData } from "../services/dualColumnData";

const vaccines = [
  "Janssen / Johnson & Johnson",
  "Comirnaty (Pfizer-BioNTech)",
  "Moderna",
  "Oxford-AstraZeneca",
];

export default function Stats() {
  const [vacc1, setVacc1] = useState("Choose vaccine");
  const [vacc2, setVacc2] = useState("Choose vaccine");
  const [vacc3, setVacc3] = useState("Choose vaccine");

  // Radar data
  const [data1radar, setData1radar] = useState(undefined);
  const [data2radar, setData2radar] = useState(undefined);
  const [data3radar, setData3radar] = useState(undefined);

  // Dual column data
  const [data1dc, setData1dc] = useState(undefined);
  const [data2dc, setData2dc] = useState(undefined);
  const [data3dc, setData3dc] = useState(undefined);

  // Fever data
  const [data1fev, setData1fev] = useState(undefined);
  const [data2fev, setData2fev] = useState(undefined);
  const [data3fev, setData3fev] = useState(undefined);

  function update1(v) {
    setVacc1(v);
    getRadarData(vacc1, setData1radar);
    getDualColumnData(vacc1, setData1dc);
    getFeverData(vacc1, setData1fev);
  }
  function update2(v) {
    setVacc2(v);
    getRadarData(vacc2, setData2radar);
    getDualColumnData(vacc2, setData2dc);
    getFeverData(vacc2, setData2fev);
  }
  function update3(v) {
    setVacc3(v);
    getRadarData(vacc3, setData3radar);
    getDualColumnData(vacc3, setData3dc);
    getFeverData(vacc3, setData3fev);
  }

  if (vacc1 == undefined) {
    update1(vaccines[0]);
    update2(vaccines[1]);
    update3(vaccines[2]);
  }

  return (
    <div className="statsView">
      <VaxColumn
        vacc={vacc1}
        vaccines={vaccines}
        setVacc={update1}
        dataDC={data1dc}
        dataRadar={data1radar}
        dataFever={data1fev}
      />
      <VaxColumn
        vacc={vacc2}
        vaccines={vaccines}
        setVacc={update2}
        dataDC={data2dc}
        dataRadar={data2radar}
        dataFever={data2fev}
      />
      <VaxColumn
        vacc={vacc3}
        vaccines={vaccines}
        setVacc={update3}
        dataDC={data3dc}
        dataRadar={data3radar}
        dataFever={data3fev}
      />
    </div>
  );
}
