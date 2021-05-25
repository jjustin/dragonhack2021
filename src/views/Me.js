import { useEffect, useState } from "react";
import "./me.css";
import { getPercentage, getRatingAverage } from "../services/data";
import { Spin } from "antd";
import { List } from "antd";

export default function Me() {
  const [sex, setSex] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [covid, setCovid] = useState(undefined);
  const [chosenVaxx, setVaxx] = useState(undefined);
  const [response, setResponse] = useState(undefined);
  const [avgData, setAvgData] = useState(undefined);
  const [percentsData, setPercentsData] = useState(undefined);

  useEffect(() => {
    if (sex !== undefined) {
      if (percentsData === undefined) {
        getPercentage(sex, (r) => {
          setPercentsData(r);
        });
      } else if (avgData === undefined) {
        getRatingAverage(sex, (r) => {
          setAvgData(r);
        });
      }
    }
  });

  function predictFor() {
    var data = {};
    for (const vaxx in percentsData) {
      data[vaxx] = {};
      for (const v of [
        "Headache",
        "Fever",
        "Fatigue",
        "Chills",
        "Nausea",
        "Diarrhea",
        "Pain at point",
        "body_aches",
      ]) {
        data[vaxx][v] = {
          percent: percentsData[vaxx][v],
          pain: avgData[vaxx][v],
        };
      }
    }
    setResponse(data);
  }

  function pretty_print() {
    var x = {};
    if (chosenVaxx !== "?") {
      x[chosenVaxx] = response[chosenVaxx];
    } else {
      x = response;
    }
    return Object.keys(x).map((vaccine) => {
      return (
        <div key={vaccine} style={{ paddingBottom: "10px" }}>
          <List
            header={
              <div style={{ fontSize: "30px" }}>
                Using {vaccine} you can expect
              </div>
            }
            dataSource={Object.keys(response[vaccine])}
            renderItem={(k) => {
              var { percent, pain } = response[vaccine][k];
              percent = percent ?? 0;
              pain = pain ?? 0;
              if (percent < 0.02) return;
              if (k === "Pain at point") k = "Pain at point of injection";
              return (
                <List.Item>
                  {percentToText(percent)} chance of {painToText(pain, k)}{" "}
                  {k.toLowerCase()}
                </List.Item>
              );
            }}
          ></List>
        </div>
      );
    });
  }

  function percentToText(percent) {
    if (percent < 0.2) {
      return "Very low";
    }
    if (percent < 0.4) {
      return "Low";
    }
    if (percent < 0.6) {
      return "Moderate";
    }
    if (percent < 0.85) {
      return "High";
    }
    return "Very high";
  }

  function painToText(p, problem) {
    if (problem === "Diarrhea") {
      return "";
    }
    if (problem === "Fever") {
      return "~" + Math.round(p * 10) / 10 + "°C";
    }

    if (p < 2) {
      return "weak";
    }
    if (p < 3.5) {
      return "moderate";
    }
    return "painful";
  }

  if (!sex) {
    return (
      <div className="me-form-question">
        <div style={{ fontSize: 30, marginBottom: "30px" }}>
          What is your sex? 🚻
        </div>
        <div style={{ display: "flex" }}>
          <div className="me-form-selector" onClick={() => setSex("male")}>
            Male
          </div>
          <div className="me-form-selector" onClick={() => setSex("female")}>
            Female
          </div>
        </div>
      </div>
    );
  }
  if (!age) {
    return (
      <div className="me-form-question">
        <div style={{ fontSize: 30, marginBottom: "30px" }}>
          What is your age group? 💬
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="me-form-selector" onClick={() => setAge("Male")}>
            19 or under
          </div>
          <div className="me-form-selector" onClick={() => setAge(20)}>
            20-29
          </div>
          <div className="me-form-selector" onClick={() => setAge(30)}>
            30-39
          </div>
          <div className="me-form-selector" onClick={() => setAge(40)}>
            40-49
          </div>
          <div className="me-form-selector" onClick={() => setAge(50)}>
            50-59
          </div>
          <div className="me-form-selector" onClick={() => setAge(60)}>
            60-69
          </div>
          <div className="me-form-selector" onClick={() => setAge(70)}>
            70-79
          </div>
          <div className="me-form-selector" onClick={() => setAge(80)}>
            80+
          </div>
        </div>
      </div>
    );
  }
  if (covid === undefined) {
    return (
      <div className="me-form-question">
        <div style={{ fontSize: 30, marginBottom: "30px" }}>
          Did you get COVID-19? 🤕
        </div>
        <div style={{ display: "flex" }}>
          <div className="me-form-selector" onClick={() => setCovid(true)}>
            Yes
          </div>
          <div className="me-form-selector" onClick={() => setCovid(false)}>
            No
          </div>
        </div>
      </div>
    );
  }
  if (chosenVaxx === undefined) {
    return (
      <div className="me-form-question">
        <div style={{ fontSize: 30, marginBottom: "30px" }}>
          Which type of vaccine will you get? 💉
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="me-form-selector wide"
            onClick={() => setVaxx("Janssen / Johnson & Johnson")}
          >
            Janssen / Johnson & Johnson
          </div>
          <div
            className="me-form-selector wide"
            onClick={() => setVaxx("Comirnaty (Pfizer-BioNTech)")}
          >
            Comirnaty (Pfizer-BioNTech)
          </div>
          <div
            className="me-form-selector wide"
            onClick={() => setVaxx("Moderna")}
          >
            Moderna
          </div>
          <div
            className="me-form-selector wide"
            onClick={() => setVaxx("Oxford-AstraZeneca")}
          >
            Oxford-AstraZeneca
          </div>
          <div className="me-form-selector wide" onClick={() => setVaxx("?")}>
            I don't know yet
          </div>
        </div>
      </div>
    );
  }

  if (response === undefined) {
    if (avgData !== undefined && percentsData !== undefined) predictFor();
    return <Spin className="loading" size="large" />;
  }

  return <div className="me-form-question2">{pretty_print(response)}</div>;
}
