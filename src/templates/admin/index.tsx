import { Outlet } from "react-router-dom"
import NavbarMenu from "../../components/admins/menu-left/NavbarMenu"


const AdminTemplate = () => {
  return (
    <div className="admin-template">
      <div className="admin-template__left">
        <NavbarMenu />
        AdminTemplate
      </div>
      <div className="admin-template__right">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminTemplate