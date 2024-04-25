import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

const ClientTemplate = () => {
  return (
    <div className="temp-client">
      <Header />
      <div className="temp-client__body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ClientTemplate;
