import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import ClientTemplate from "./templates/client";
import About from "./pages/about";
import Contact from "./pages/contact";

import "swiper/scss";
import "swiper/scss/navigation";
import Register from "./pages/register";
import AdminTemplate from "./templates/admin";

function App() {
  return (
    <Routes>
      <Route path="" element={<ClientTemplate />}>
        <Route index path="" element={<Home />}></Route>
        <Route path="ve-chung-toi" element={<About />}></Route>
        <Route path="lien-he" element={<Contact />}></Route>
      </Route>
      <Route path="" element={<AdminTemplate />}>
        <Route path="dang-nhap" element={<Login />}></Route>
        <Route path="dang-ky" element={<Register />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
