import { IBook } from "../api/base.types";
import { Card, Space } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import Truncate from "react-truncate";
type BookListProps = {
  books: IBook[] | undefined;
};

const BookList = ({ books }: BookListProps) => {
  const { Meta } = Card;

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
            extra={<HeartOutlined onClick={() => {}} />}
            title={book.volumeInfo.title}
            style={{ width: 225 }}
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
