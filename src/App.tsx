import React, { Fragment, useState } from "react";
import { Link, Route, useLocation } from "react-router-dom";
import { BackTop, Layout, Menu, Tooltip } from "antd";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import ProfilePage from "./pages/profile";
import { LoginOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { AppState, AppContextType, AppContext } from "./app-context";
import "antd/dist/antd.css";
const { Header, Footer, Content } = Layout;

function App() {
  const location = useLocation();

  const [app, setAppState] = useState<AppState>({
    name: "My Dude",
    loggedIn: false,
    favBooks: [],
  });

  const context: AppContextType = { app, setAppState };

  const setLoggedIn = (login: boolean) => {
    setAppState({ ...app, loggedIn: login });
  };

  return (
    <AppContext.Provider value={context}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            style={{ height: "100%" }}
          >
            <Menu.Item key="/">
              <span>Home</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="/search">
              <span>Search</span>
              <Link to="/search" />
            </Menu.Item>
            {app.loggedIn ? (
              <Fragment>
                <Tooltip placement="bottom" title="My Profile">
                  <Menu.Item
                    key="/profile"
                    style={{ marginLeft: "auto", padding: "0 15px" }}
                  >
                    <UserOutlined style={{ fontSize: "1.2rem" }} />
                    <Link to="/profile" />
                  </Menu.Item>
                </Tooltip>
                <Tooltip placement="bottom" title="Logout">
                  <Menu.Item
                    key="logout"
                    onClick={() => setLoggedIn(false)}
                    style={{ padding: "0 15px" }}
                  >
                    <LogoutOutlined style={{ fontSize: "1.2rem" }} />
                  </Menu.Item>
                </Tooltip>
              </Fragment>
            ) : (
              <Tooltip placement="bottom" title="Login">
                <Menu.Item
                  key="login"
                  onClick={() => setLoggedIn(true)}
                  style={{ marginLeft: "auto", padding: "0 15px" }}
                >
                  <LoginOutlined style={{ fontSize: "1.2rem" }} />
                </Menu.Item>
              </Tooltip>
            )}
          </Menu>
        </Header>
        <BackTop />
        <Content
          style={{
            marginTop: "24px",
            marginLeft: "16px",
            marginRight: "16px",
            padding: 24,
            background: "#fff",
          }}
        >
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/profile" component={ProfilePage} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <a href="https://github.com/pdkkid">
            Austin Terry ©{new Date().getFullYear()}
          </a>
        </Footer>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
