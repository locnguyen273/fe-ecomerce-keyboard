import { Link } from "react-router-dom";

const AuthModal = () => {
  return (
    <div className="auth-search">
      <div className="auth-search__no-login">
        <Link className="auth-search__item" to={"/dang-ky"}>
          Đăng ký
        </Link>
        <Link className="auth-search__item" to={"/dang-nhap"}>
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default AuthModal;
