import { IBook } from "../api/base.types";
import { Card, Space } from "antd";
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
      {books?.map((book, i) => {
        return (
          <Card
            key={i}
            style={{ width: 225 }}
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
              title={book.volumeInfo.title}
              description={book.volumeInfo.authors}
            />
          </Card>
        );
      })}
    </Space>
  );
};

export default BookList;
