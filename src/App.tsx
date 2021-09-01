import React from "react";
import { Layout } from "antd";

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Header />
      <Content />
      <Footer style={{ textAlign: "center" }}>
        <a style={{ textDecoration: "none" }} href="https://github.com/pdkkid">
          Austin Terry ©2021
        </a>
      </Footer>
    </Layout>
  );
}

export default App;
