import LineGraph from "./LineGraph";
import RadarCustom from "./RadarCustom";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./components.css";

export default function VaxColumn(props) {
  function handleMenuClick(e) {
    props.setVacc(e.key);
  }

  const menuItems = props.vaccines.map((v) => (
    <Menu.Item key={v}>{v}</Menu.Item>
  ));
  const menu = <Menu onClick={handleMenuClick}>{menuItems}</Menu>;

  return (
    <div className="columnView">
      <Dropdown overlay={menu}>
        <Button>
          {props.vacc}
          <DownOutlined />
        </Button>
      </Dropdown>
      <div className="lineGraph">
        <LineGraph data={props.data} />
      </div>
      <div className="lineGraph">
        <RadarCustom data={props.data} />
      </div>
    </div>
  );
}
