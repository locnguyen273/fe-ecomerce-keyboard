/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
const { Search } = Input;

const ModalSearch = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  }

  return (
    <div className="modal-search">
      <h4 className="modal-search__title">tìm kiếm</h4>
      <Search
        placeholder="Tìm kiếm sản phẩm..."
        allowClear
        onSearch={onSearch}
        size="large"
        className="modal-search__search"
      />
    </div>
  );
};

export default ModalSearch;
