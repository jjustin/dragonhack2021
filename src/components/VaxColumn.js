import DualBarChart from "./DualBarChart";
import RadarCustom from "./RadarCustom";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./components.css";

export default function VaxColumn(props) {
  function handleMenuClick(e) {
    props.setVacc(e.key);
    console.log("clicked: ", e.key);
  }

  const menuItems = props.vaccines.map((v) => (
    <Menu.Item key={v}>{v}</Menu.Item>
  ));
  const menu = <Menu onClick={handleMenuClick}>{menuItems}</Menu>;
  console.log(props);
  return (
    <div className="columnView">
      <Dropdown overlay={menu}>
        <Button>
          {props.vacc}
          <DownOutlined />
        </Button>
      </Dropdown>
      <div style={{ fontWeight: "bold", fontSize: "30px", paddingTop: "30px" }}>
        Pain rating
      </div>
      <div className="lineGraph">
        <DualBarChart
          data={props.dataDC}
          domain={[0, 5]}
          rotation={0}
          tickCount={6}
        />
      </div>
      <div style={{ fontWeight: "bold", fontSize: "30px", paddingTop: "15px" }}>
        Fever
      </div>
      <div className="lineGraph">
        <DualBarChart
          data={props.dataFever}
          domain={[36, 40]}
          rotation={0}
          tickCount={5}
        />
      </div>
      <div style={{ fontWeight: "bold", fontSize: "30px", paddingTop: "15px" }}>
        Chance of symptoms
      </div>
      <div className="lineGraph">
        <RadarCustom data={props.dataRadar} />
      </div>
    </div>
  );
}
