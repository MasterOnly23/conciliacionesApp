import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBarMainComponent from "../components/SideBar/SideBarMainComponent/SideBarMainComponent";
import { Header } from "../components/Header/header";
import {BankManagement} from "../components/BankManagement/BankManagement";

const MainRoutes = () => {
  return (
    <Router>
        <div className="sidebarRoute">
      <SideBarMainComponent />
      <div className="contentRoutes">
      <Header />
      <Routes>
      <Route path="/" exact  />
        <Route path="/:Banco" element={<BankManagement/>} />
      </Routes>
      </div>
      </div>
    </Router>
  );
};

export default MainRoutes;