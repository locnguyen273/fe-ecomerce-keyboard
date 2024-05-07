import { Outlet } from "react-router-dom"


const AdminTemplate = () => {
  return (
    <div className="admin-container">
      <Outlet />
    </div>
  )
}

export default AdminTemplate