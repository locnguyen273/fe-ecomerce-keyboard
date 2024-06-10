import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import ClientTemplate from "./templates/client";
import About from "./pages/about";
import Contact from "./pages/contact";

import AdminTemplate from "./templates/admin";
import HomeAdmin from "./pages/admin-pages/Home";

import "swiper/scss";
import "swiper/scss/navigation";

function App() {
  return (
    <Routes>
      <Route path="" element={<ClientTemplate />}>
        <Route index path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
      <Route path="login" element={<Login />}></Route>

      {/* admin */}
      <Route path="/admin" element={<AdminTemplate />}>
        <Route index path="" element={<HomeAdmin />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
