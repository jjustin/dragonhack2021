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
  const [vacc1, setVacc1] = useState(vaccines[0]);
  const [vacc2, setVacc2] = useState(vaccines[1]);
  const [vacc3, setVacc3] = useState(vaccines[2]);

  // Radar data
  const [data1radar, setData1radar] = useState(undefined);
  if (data1radar == undefined) {
    getRadarData(vacc1, setData1radar);
  }
  const [data2radar, setData2radar] = useState(undefined);
  if (data2radar == undefined) {
    getRadarData(vacc2, setData2radar);
  }
  const [data3radar, setData3radar] = useState(undefined);
  if (data3radar == undefined) {
    getRadarData(vacc3, setData3radar);
  }

  // Dual column data
  const [data1dc, setData1dc] = useState(undefined);
  if (data1dc == undefined) {
    getDualColumnData(vacc1, setData1dc);
  }
  const [data2dc, setData2dc] = useState(undefined);
  if (data2dc == undefined) {
    getDualColumnData(vacc2, setData2dc);
  }
  const [data3dc, setData3dc] = useState(undefined);
  if (data3dc == undefined) {
    getDualColumnData(vacc3, setData3dc);
  }

  // Fever data
  const [data1fev, setData1fev] = useState(undefined);
  if (data1fev == undefined) {
    getFeverData(vacc1, setData1fev);
  }
  const [data2fev, setData2fev] = useState(undefined);
  if (data2fev == undefined) {
    getFeverData(vacc2, setData2fev);
  }
  const [data3fev, setData3fev] = useState(undefined);
  if (data3fev == undefined) {
    getFeverData(vacc3, setData3fev);
  }

  return (
    <div className="statsView">
      <VaxColumn
        vacc={vacc1}
        vaccines={vaccines}
        setVacc={setVacc1}
        dataDC={data1dc}
        dataRadar={data1radar}
        dataFever={data1fev}
      />
      <VaxColumn
        vacc={vacc2}
        vaccines={vaccines}
        setVacc={setVacc2}
        dataDC={data2dc}
        dataRadar={data2radar}
        dataFever={data2fev}
      />
      <VaxColumn
        vacc={vacc3}
        vaccines={vaccines}
        setVacc={setVacc3}
        dataDC={data3dc}
        dataRadar={data3radar}
        dataFever={data2fev}
      />
    </div>
  );
}
