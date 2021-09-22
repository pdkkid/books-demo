import { IBook } from "../api/base.types";
import { BackTop, Card, Space } from "antd";
import Truncate from "react-truncate";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Favorited } from "./book-favorite";
import { Fragment, useContext } from "react";
import { AppContext } from "../app-context";
const { Meta } = Card;

const BookList = ({ books }: { books: IBook[] | undefined }) => {
  const { app, setAppState } = useContext(AppContext);

  const handleFavoriteToggle = (book: IBook) => {
    app.favBooks.includes(book)
      ? setAppState({ ...app, favBooks: app.favBooks.filter(n => n !== book) })
      : setAppState({ ...app, favBooks: app.favBooks.concat(book) });
  };

  return (
    <Fragment>
      <BackTop />
      <Space
        size={[12, 16]}
        wrap
        align="start"
        style={{ justifyContent: "space-evenly" }}
      >
        {books?.map(book => {
          return (
            <Card
              key={book.id}
              extra={
                app.loggedIn &&
                (Favorited(book) ? (
                  <HeartFilled onClick={() => handleFavoriteToggle(book)} />
                ) : (
                  <HeartOutlined onClick={() => handleFavoriteToggle(book)} />
                ))
              }
              title={<Truncate lines={2}>{book.volumeInfo.title}</Truncate>}
              headStyle={{ textAlign: "center" }}
              style={{ width: 225, flex: 1 }}
              type="inner"
              hoverable
              cover={
                <img
                  height={300}
                  alt={book.volumeInfo.title}
                  src={
                    book.volumeInfo.imageLinks?.smallThumbnail ||
                    "https://i.ibb.co/LxkmGDX/download.png"
                  }
                />
              }
            >
              <Meta
                title={
                  <span style={{ fontSize: "12px" }}>
                    {book.volumeInfo.authors}
                  </span>
                }
                description={
                  <Truncate lines={4}>{book.volumeInfo.description}</Truncate>
                }
              />
            </Card>
          );
        })}
      </Space>
    </Fragment>
  );
};

export default BookList;
