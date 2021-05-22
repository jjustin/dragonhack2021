import { useState } from "react";
import "./me.css";
export default function Me() {
  const [sex, setSex] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [covid, setCovid] = useState(undefined);

  if (!sex) {
    return (
      <div className="me-form-question">
        <div style={{ fontSize: 30, marginBottom: "30px" }}>
          What is your sex? 🚻
        </div>
        <div style={{ display: "flex" }}>
          <div className="me-form-selector" onClick={() => setSex("Male")}>
            Male
          </div>
          <div className="me-form-selector" onClick={() => setSex("Female")}>
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
  return <div></div>;
}

function predictFor(sex, age, covid) {}
