import { Divider, Input, Space } from "antd";
import { ChangeEvent, Fragment, useState } from "react";
import { BookSearch } from "../api/search";

const SearchPage = () => {
  const { Search } = Input;
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
        <Search
          placeholder="search text"
          // enterButton="Search"
          size="large"
          style={{ minWidth: "75vh" }}
          // loading={loading}
          onChange={e => handleQueryChange(e)}
        />
      </Space>
      <Divider />
    </Fragment>
  );
};

export default SearchPage;
