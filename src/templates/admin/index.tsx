import { Outlet } from "react-router-dom";
import { NavbarMenu } from "../../components/admins/index";
import { Button, Input, Image } from "antd";
import { SearchProps } from "antd/es/input";
const { Search } = Input;

const AdminTemplate = () => {
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
            <Button className="admin-template__right__header--user">
              <Image 
                className="admin-template__right__header--avatar"
                src="https://themekita.com/demo-kaiadmin-lite-bootstrap-dashboard/livepreview/demo1/assets/img/profile.jpg" 
                alt="avatar" preview={false} 
              />
              Hi, Admin
            </Button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminTemplate;
