import { Divider, Input, Space, Form, Empty, Select } from "antd";
import { ChangeEvent, Fragment, useState } from "react";
import { BookSearch } from "../api/base";
import useDebounce from "../hooks/debounce";
import BookList from "../components/book-list";
const { Option } = Select;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("intitle");
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const { data, error } = BookSearch(debouncedSearchValue, searchTerm);

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
        <Form>
          <Form.Item
            style={{ marginBottom: 0, width: "60vw", whiteSpace: "nowrap" }}
          >
            <Form.Item
              hasFeedback
              validateStatus={error ? "error" : undefined}
              help={error ? error.message : undefined}
              style={{
                display: "inline-block",
                width: "calc(25% - 2px)",
                minWidth: "fit-content",
              }}
            >
              <Select
                onChange={e => handleTermChange(e)}
                defaultValue="intitle"
                size="large"
              >
                <Option value="intitle">Title</Option>
                <Option value="inauthor">Author</Option>
                <Option value="subject">Genre</Option>
              </Select>
            </Form.Item>
            <Form.Item
              style={{
                display: "inline-block",
                width: "calc(75% - 2px)",
                margin: "0 8px",
              }}
            >
              <Input
                placeholder="start typing to search..."
                size="large"
                style={{ minWidth: "50%", textAlign: "center" }}
                onChange={e => handleValueChange(e)}
              />
            </Form.Item>
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
