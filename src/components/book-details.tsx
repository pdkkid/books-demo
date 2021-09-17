import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { IBook } from "../api/base.types";
type BookDetailsProps = {
  book?: IBook;
};

const BookDetails = ({ book }: BookDetailsProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!book) {
      return;
    }
    setVisible(true);
  }, [book]);

  return (
    <Modal
      title="Modal 1000px width"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      width={1000}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};

export default BookDetails;
