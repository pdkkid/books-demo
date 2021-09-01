import { Divider, Input, Space, Form, Empty, Select } from "antd";
import { ChangeEvent, Fragment, useState } from "react";
import { BookSearch } from "../api/base";
import BookList from "../components/book-list";
const { Option } = Select;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("intitle");
  const [searchValue, setSearchValue] = useState("");

  const { data, error } = BookSearch(searchValue, searchTerm);

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleTermChange = (event: string) => {
    setSearchTerm(event);
  };

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
              addonBefore={
                <Select
                  onChange={e => handleTermChange(e)}
                  defaultValue="intitle"
                >
                  <Option value="intitle">Title</Option>
                  <Option value="inauthor">Author</Option>
                  <Option value="subject">Genre</Option>
                </Select>
              }
              placeholder="start typing to search..."
              size="large"
              style={{ minWidth: "50vw", textAlign: "center" }}
              onChange={e => handleValueChange(e)}
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
