import { Image, Input } from "antd";
import Logo from "../../assets/images/logo-desktop.png";
import type { SearchProps } from "antd/es/input/Search";
import { Link } from "react-router-dom";
const { Search } = Input;

const Footer = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <div className="footer__column--logo">
            <Image src={Logo} alt="" preview={false} />
          </div>
          <div className="footer__column__list">
            <p className="footer__column--content">Địa chỉ: 54/3, ĐHT09, Phường Đông Hưng Thuận, Q12, TP HCM</p>
            <p className="footer__column--content">Điện thoại: 0987654321</p>
            <p className="footer__column--content">Email: tanlocit20062000@gmail.com</p>
          </div>
        </div>
        <div className="footer__column">
          <h5 className="footer__column--title">chính sách và liên kết</h5>
          <div className="footer__column__list">
            <Link to={"/"} className="footer__column--content">Chính sách vận chuyển</Link>
            <Link to={"/"} className="footer__column--content">Chính sách bảo hành</Link>
            <Link to={"/"} className="footer__column--content">Chính sách bảo mật</Link>
            <Link to={"/"} className="footer__column--content">Chính sách đổi trả</Link>
          </div>
        </div>
        <div className="footer__column">
          <h5 className="footer__column--title">nhận tin khuyến mãi</h5>
          <Search
            className="footer__column--search"
            placeholder="Nhập email của bạn"
            enterButton="Đăng ký"
            size="middle"
            onSearch={onSearch}
          />
          <div className="footer__column__social-list">
            <Link to={"/"} className="footer__column__social-list--item facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to={"/"} className="footer__column__social-list--item instagram">
            <i className="fa-brands fa-square-instagram"></i>
            </Link>
            <Link to={"/"} className="footer__column__social-list--item youtube">
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link to={"/"} className="footer__column__social-list--item tiktok">
              <i className="fa-brands fa-tiktok"></i>
            </Link>
          </div>
        </div>
      </div>
      <p className="footer__bottom">
        © Bản quyền thuộc về centerkeyboardsgop.com.vn | Thiết kế và duy trì bởi Center Keyboard Shop
      </p>
    </div>
  );
};

export default Footer;
