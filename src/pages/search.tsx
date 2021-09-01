import { Divider, Input, Space, Form } from "antd";
import { ChangeEvent, Fragment, useState } from "react";
import { BookSearch } from "../api/base";
import BookList from "../components/book-list";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const { data, error } = BookSearch(query);
  console.log(data);

  return (
    <Fragment>
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <Form style={{}}>
          <Form.Item
            hasFeedback
            validateStatus={error ? "error" : undefined}
            help={error ? error.message : undefined}
          >
            <Input
              placeholder="start typing to search..."
              size="large"
              style={{ minWidth: "75vh", textAlign: "center" }}
              onChange={e => handleQueryChange(e)}
            />
          </Form.Item>
        </Form>
      </Space>
      <Divider style={{ margin: 0 }} />
      <BookList books={data?.items} />
    </Fragment>
  );
};

export default SearchPage;
