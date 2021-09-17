import { IBook } from "../api/base.types";
import { Card, Space } from "antd";
import Truncate from "react-truncate";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Favorited } from "./book-favorite";
import { useEffect, useRef } from "react";
const { Meta } = Card;

const BookList = ({ books }: { books: IBook[] | undefined }) => {
  return (
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
              Favorited(book) ? (
                <HeartFilled onClick={handleDelFavBook} />
              ) : (
                <HeartOutlined onClick={handleAddFavBook} />
              )
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
  );
};

export default BookList;
