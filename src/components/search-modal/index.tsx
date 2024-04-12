import React from "react";
import useDetectClickOutside from "../../hooks/useDetectClickOutside";
import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
const { Search } = Input;

interface Props {
  closeToggle: () => void;
}

const SearchModal: React.FC<Props> = ({ closeToggle }) => {
  const ref = useDetectClickOutside({ onTriggered: closeToggle });

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div ref={ref} className="header__modal-search">
      <h4>tìm kiếm</h4>
      <Search
        className="header__search"
        placeholder="Tìm kiếm sản phẩm..."
        allowClear
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchModal;
