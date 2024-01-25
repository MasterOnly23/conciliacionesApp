import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBarMainComponent from "../components/SideBar/SideBarMainComponent/SideBarMainComponent";
import { Header } from "../components/Header/header";
import {DragFileComponent} from "../components/DragFileComponent/DragFileComponent";

const MainRoutes = () => {
  return (
    <Router>
        <div className="sidebarRoute">
      <SideBarMainComponent />
      <div className="contentRoutes">
      <Header />
      <Routes>
      <Route path="/" exact  />
        <Route path="/:banco" element={<DragFileComponent/>} />
      </Routes>
      </div>
      </div>
    </Router>
  );
};

export default MainRoutes;