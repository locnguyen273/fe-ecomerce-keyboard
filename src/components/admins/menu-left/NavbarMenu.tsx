import { Image } from "antd";
import LogoAdmin from "../../../assets/images/logo-admin.png";
import { Link, NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div className="nav-menu">
      <Link to="/admin" className="nav-menu__top">
        <Image src={LogoAdmin} preview={false} />
        <h3 className="nav-menu__top--title">Center Keyboard</h3>
      </Link>

      <div className="nav-menu__body">
        <NavLink to="/admin/manage-user" className={({ isActive }) => (isActive ? 'nav-menu__body--item active' : 'nav-menu__body--item')} >
          <i className="fa-regular fa-user"></i>
          Quản lý người dùng
        </NavLink>
        <NavLink to="/admin/manage-product" className={({ isActive }) => (isActive ? 'nav-menu__body--item active' : 'nav-menu__body--item')} >
          <i className="fab fa-product-hunt"></i>
          Quản lý sản phẩm
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarMenu;
