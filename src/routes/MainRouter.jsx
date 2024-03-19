import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import SideBarMainComponent from "../components/SideBar/SideBarMainComponent/SideBarMainComponent";
import { Header } from "../components/Header/header";
import { Loadder } from "../components/Loadder/Loadder";

const DashBoard = lazy(() => import("../components/DashBoard/DashBoard").then(module => ({ default: module.DashBoard })));
const BankManagement = lazy(() => import("../components/BankManagement/BankManagement").then(module => ({ default: module.BankManagement })));
const Historial = lazy(() => import("../components/Historial/table/HistorialListComponent").then(module => ({ default: module.HistorialListComponent })));
const Page404 = lazy(() => import("../components/Page404/Page404").then(module => ({ default: module.Page404 })));


const MainRoutes = () => {
  const rutaServer = "/Conciliaciones"
  return (
    <Router>
        <div className="sidebarRoute">
      <SideBarMainComponent />
      <div className="contentRoutes">
      <Header />
      <Suspense fallback={<Loadder/>}>
      <Routes>
      <Route path={rutaServer} exact element={<DashBoard />} />
        <Route path={rutaServer+"/historial"} element={<Historial/>} />
        <Route path={rutaServer+"/:Banco"} element={<BankManagement/>} />
        <Route path={rutaServer+"/*"} element={<Page404 />} />
      </Routes>
      </Suspense>
      
      </div>
      </div>
    </Router>
  );
};

export default MainRoutes;