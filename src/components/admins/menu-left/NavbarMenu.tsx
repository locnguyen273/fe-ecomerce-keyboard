import { Image } from "antd"
import LogoAdmin from "../../../assets/images/logo-admin.png"

const NavbarMenu = () => {
  return (
    <div className="nav-menu">
      <div className="nav-menu__top">
        <Image src={LogoAdmin} preview={false} />
        <h3 className="nav-menu__top--title">Center Keyboard</h3>
      </div>
    </div>
  )
}

export default NavbarMenu