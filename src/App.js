import "antd/dist/antd.css";
import "./views/landing.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Me from "./views/Me";
import Stats from "./views/Stats";
import Add from "./views/Add";
import { Layout, Menu } from "antd";
import {
  QuestionOutlined,
  BarChartOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import LandingPage from "./views/LandingPage";

function App() {
  const { Content, Header } = Layout;
  return (
    <Router>
      <Switch>
        <Route>
          <Layout className="site-layout">
            <Header className="header">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={
                  ["add", "prediction", "stats"].indexOf(
                    window.location.pathname.substr(1)
                  ) +
                  1 +
                  ""
                }
              >
                <Menu.Item key="1" icon={<PlusOutlined />}>
                  <Link to="add">Contribute</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<QuestionOutlined />}>
                  <Link to="prediction">Prediction</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<BarChartOutlined />}>
                  <Link to="stats">Statistics</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Layout className="site-layout">
              <Content className="site-layout" style={{ marginTop: 0 }}>
                <div
                  className="site-layout-background"
                  style={{ textAlign: "center" }}
                >
                  <Switch>
                    <Route exact path="/">
                      <LandingPage />
                    </Route>
                    <Route path="/prediction">
                      <Me />
                    </Route>
                    <Route path="/stats">
                      <Stats />
                    </Route>
                    <Route path="/add">
                      <Add />
                    </Route>
                  </Switch>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
