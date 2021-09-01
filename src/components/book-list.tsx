import { Fragment } from "react";
import { IBook } from "../api/base.types";
import { Card } from "antd";

type BookListProps = {
  books: IBook[] | undefined;
};

const BookList = ({ books }: BookListProps) => {
  const { Meta } = Card;

  return (
    <Fragment>
      {books?.map((book, index) => {
        return (
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt={book.volumeInfo.title}
                src={book.volumeInfo.imageLinks.smallThumbnail}
              />
            }
          >
            <Meta
              title={book.volumeInfo.title}
              description={book.volumeInfo.description}
            />
          </Card>
        );
      })}
    </Fragment>
  );
};

export default BookList;
