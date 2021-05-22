import "./stats.css";
import VaxColumn from "../components/VaxColumn";
import React, { useState } from "react";

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

  return (
    <div className="statsView">
      <VaxColumn vacc={vacc1} vaccines={vaccines} setVacc={setVacc1} />
      <VaxColumn vacc={vacc2} vaccines={vaccines} setVacc={setVacc2} />
      <VaxColumn vacc={vacc3} vaccines={vaccines} setVacc={setVacc3} />
    </div>
  );
}
