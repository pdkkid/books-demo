import { Divider, Input, Space, Form, Empty, Select } from "antd";
import { ChangeEvent, Fragment, useState } from "react";
import { BookSearch } from "../api/base";
import BookList from "../components/book-list";

const SearchPage = () => {
  const [query, setQuery] = useState({
    term: "intitle",
    search: "",
  });

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery({ term: query.term, search: event.target.value });
  };
  const handleTermChange = (event: string) => {
    setQuery({ term: event, search: query.search });
  };

  const { data, error } = BookSearch(query);

  const { Option } = Select;
  const searchTerms = (
    <Select onChange={e => handleTermChange(e)} defaultValue="intitle">
      <Option value="intitle">Title</Option>
      <Option value="inauthor">Author</Option>
      <Option value="subject">Genre</Option>
    </Select>
  );

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
              addonBefore={searchTerms}
              placeholder="start typing to search..."
              size="large"
              style={{ minWidth: "75vh", textAlign: "center" }}
              onChange={e => handleQueryChange(e)}
            />
          </Form.Item>
        </Form>
      </Space>
      <Divider style={{ margin: 0 }} />
      {!data && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      <BookList books={data?.items} />
    </Fragment>
  );
};

export default SearchPage;
