import { BookOutlined } from "@ant-design/icons";
import { Typography, Space } from "antd";

const { Text } = Typography;

const HomePage = () => {
  return (
    <Space
      align="center"
      direction="vertical"
      size={12}
      style={{ width: "100%", padding: "16px" }}
    >
      <BookOutlined style={{ textAlign: "center", fontSize: "8rem" }} />
      <Text strong>Books Demo</Text>
      <Text>Navigate to the Search tab to get started!</Text>
    </Space>
  );
};

export default HomePage;
