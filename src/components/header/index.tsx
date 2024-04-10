
import { Input, Image, Button } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import Logo from "../../assets/images/logo-desktop.png";
import { Link } from "react-router-dom";

const { Search } = Input;

const Header = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__row header__center">
          <Image className="header__center--logo" src={Logo} preview={false} />
          <div className="header__menu-list">
            <Link to={""} className="header__menu-list--item">trang chủ</Link>
            <Link to={""} className="header__menu-list--item">sản phẩm</Link>
            <Link to={""} className="header__menu-list--item">tin tức</Link>
            <Link to={""} className="header__menu-list--item">liên hệ</Link>
          </div>
          <Search
            className="header__search"
            placeholder="Tìm kiếm sản phẩm..."
            allowClear
            onSearch={onSearch}
          />
          <div className="header__right">
            <Button className="header__right--btn-user">
              <i className="fa-solid fa-user"></i>
            </Button>
            <Button className="header__right--btn-bag">
              <i className="fa-solid fa-basket-shopping"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
