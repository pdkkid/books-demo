import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Empty } from "antd";
import { Fragment, useContext } from "react";
import { AppContext } from "../app-context";
import { Typography } from "antd";
import BookList from "../components/book-list";

const { Title } = Typography;

const ProfilePage = () => {
  const { app } = useContext(AppContext);
  const { favBooks, name, loggedIn } = app;

  return (
    <Fragment>
      {loggedIn ? (
        <Fragment>
          <Avatar size={64} icon={<UserOutlined />} />
          <Title
            level={2}
            style={{
              display: "inline",
              margin: "0 16px",
              verticalAlign: "middle",
            }}
          >
            Hello, {name}
          </Title>
          <Divider>Your Favorites</Divider>
          {favBooks.length > 0 ? (
            <BookList books={favBooks} />
          ) : (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Nothing here yet"
            />
          )}
        </Fragment>
      ) : (
        <div>You are not logged in.</div>
      )}
    </Fragment>
  );
};

//<BookList books={data?.items} />
export default ProfilePage;
