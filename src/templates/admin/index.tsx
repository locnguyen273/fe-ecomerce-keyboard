/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import { NavbarMenu } from "../../components/admins/index";
import { Button, Input, Image } from "antd";
import { SearchProps } from "antd/es/input";
import { useEffect, useRef, useState } from "react";
const { Search } = Input;

const AdminTemplate = () => {
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const ref: any = useRef();

  useEffect(() => {
    const handler = (e: Event) => {
      if (!ref.current.contains(e.target)) {
        setShowInfoPopup(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleSetShowModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShowInfoPopup((prevState) => !prevState);
    console.log(showInfoPopup);
  };

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="admin-template">
      <div className="admin-template__left">
        <NavbarMenu />
      </div>
      <div className="admin-template__right">
        <div className="admin-template__right__header">
          <div className="admin-template__right__header--container">
            <Search
              className="admin-template__right__header--search"
              placeholder="input search text"
              onSearch={onSearch}
            />
            <Button ref={ref} className="admin-template__right__header--user" onClick={handleSetShowModal}>
              <Image 
                className="admin-template__right__header--avatar"
                src="https://themekita.com/demo-kaiadmin-lite-bootstrap-dashboard/livepreview/demo1/assets/img/profile.jpg" 
                alt="avatar" preview={false} 
              />
              Hi, Admin
            </Button>
          </div>
          {showInfoPopup && <div className="admin-template__right__header--popup">

          </div>}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminTemplate;
