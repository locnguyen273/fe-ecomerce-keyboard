import { NavLink } from "react-router-dom";
import { Input, Image, Button } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import Logo from "../../assets/images/logo-desktop.jpg"

const { Search } = Input;

const Header = () => {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__row">
          <p className="text-white">Miễn phí vận chuyển cho đơn hàng trên 1.000.000 VNĐ</p>
          <p className="text-white">Hotline: <NavLink className="text-white" to={""}>0987654321</NavLink></p>
        </div>
        <div className="header__row header__center">
          <Image
            className="header__center--logo"
            src={Logo}
            preview={false}
          />
          <Search className="header__center--search" placeholder="Tìm kiếm sản phẩm..." allowClear onSearch={onSearch} />
          <div className="header__center--right">
            <Button className="header__center--btn-user">
              <i className="fa-solid fa-user"></i>
            </Button>
            <Button className="header__center--btn-bag">
              <i className="fa-solid fa-basket-shopping"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header