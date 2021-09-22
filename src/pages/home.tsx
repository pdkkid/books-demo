import { BookOutlined } from "@ant-design/icons";
import { Typography, Space } from "antd";
import { LoremIpsum } from "react-lorem-ipsum";

const { Text, Title } = Typography;

const HomePage = () => {
  return (
    <Space
      align="center"
      direction="vertical"
      style={{
        width: "100%",
        padding: "16px",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <BookOutlined style={{ textAlign: "center", fontSize: "8rem" }} />
      <Title style={{ margin: "auto", padding: "8px" }}>Books Demo</Title>
      <Text strong>Navigate to the Search tab to get started!</Text>
      <Text>
        <LoremIpsum p={5} />
      </Text>
    </Space>
  );
};

export default HomePage;
