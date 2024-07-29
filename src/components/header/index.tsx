/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, Button } from "antd";
import Logo from "../../assets/images/logo-desktop.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ModalSearch from "../modal-search";
import AuthModal from "../auth-modal";

const Header = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const ref: any = useRef();

  useEffect(() => {
    const handler = (e: Event) => {
      if (!ref.current.contains(e.target)) {
        setShowSearchModal(false);
        setShowAuthModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleSetShowModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShowAuthModal(false);
    setShowSearchModal((prevState) => !prevState);
  };

  const handleSetShowAuthModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShowSearchModal(false);
    setShowAuthModal((prevState) => !prevState);
  };

  return (
    <div ref={ref}>
      <div className="header">
        <div className="header__container">
          <div className="header__row header__center">
            <div className="header__left">
              <Button className="header__left--btn-menu">
                <i className="fa-solid fa-bars"></i>
              </Button>
              <Image
                className="header__left--logo"
                src={Logo}
                preview={false}
              />
            </div>
            <div className="header__menu-list">
              <Link to={""} className="header__menu-list--item">
                trang chủ
              </Link>
              <Link to={""} className="header__menu-list--item">
                sản phẩm
              </Link>
              <Link to={""} className="header__menu-list--item">
                tin tức
              </Link>
              <Link to={""} className="header__menu-list--item">
                liên hệ
              </Link>
            </div>
            <div className="header__right">
              <Button
                className="header__right--btn-search"
                onClick={handleSetShowModal}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
              <Button className="header__right--btn-user" onClick={handleSetShowAuthModal}>
                <i className="fa-solid fa-user"></i>
              </Button>
              <Button className="header__right--btn-bag">
                <i className="fa-solid fa-basket-shopping"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showSearchModal && <ModalSearch />}
      {showAuthModal && <AuthModal />}
    </div>
  );
};

export default Header;
