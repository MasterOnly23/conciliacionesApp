import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBarMainComponent from "../components/SideBar/sidebar.jsx";


const MainRoutes = () => {
  return (
    <Router>
        <div className="sidebarRoute">
      <SideBarMainComponent />
      <div className="contentRoutes">
      <Routes>
      <Route path="/" exact  />
        <Route path="/about"  />
      </Routes>
      </div>
      </div>
    </Router>
  );
};

export default MainRoutes;