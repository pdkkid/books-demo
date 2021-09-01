import React from "react";
import { Link, Route, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import ProfilePage from "./pages/profile";
import "antd/dist/antd.css";

function App() {
  const { Header, Footer, Content } = Layout;

  const location = useLocation();

  return (
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
          <Menu.Item key="/profile" style={{ marginLeft: "auto" }}>
            <span>My Books</span>
            <Link to="/profile" />
          </Menu.Item>
        </Menu>
      </Header>
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
        <a href="https://github.com/pdkkid">Austin Terry ©2021</a>
      </Footer>
    </Layout>
  );
}

export default App;
