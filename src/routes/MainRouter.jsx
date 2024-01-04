import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";


const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path=""/>
      </Routes>
    </Router>
  );
};

export default MainRoutes;