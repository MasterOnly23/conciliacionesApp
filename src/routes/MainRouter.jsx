import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import SideBarMainComponent from "../components/SideBar/SideBarMainComponent/SideBarMainComponent";
import { Header } from "../components/Header/header";

const DashBoard = lazy(() => import("../components/DashBoard/DashBoard").then(module => ({ default: module.DashBoard })));
const BankManagement = lazy(() => import("../components/BankManagement/BankManagement").then(module => ({ default: module.BankManagement })));

const MainRoutes = () => {
  return (
    <Router>
        <div className="sidebarRoute">
      <SideBarMainComponent />
      <div className="contentRoutes">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" exact element={<DashBoard />} />
        <Route path="/:Banco" element={<BankManagement/>} />
      </Routes>
      </Suspense>
      
      </div>
      </div>
    </Router>
  );
};

export default MainRoutes;