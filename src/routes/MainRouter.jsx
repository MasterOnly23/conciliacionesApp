import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
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
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" exact  />
        <Route path="/:Banco" element={<BankManagement/>} />
      </Routes>
      </Suspense>
      
      </div>
      </div>
    </Router>
  );
};

export default MainRoutes;