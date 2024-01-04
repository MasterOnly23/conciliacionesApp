import { Link } from "react-router-dom";
import "./SideBarLogoComponent.css";
import LogoCompleto from "../../../assets/img/logo-completo.png";

export const SideBarLogoComponent = () => {
  return (
    <div className="sidebar-logo">
      <Link to="/">
        <img className="logo-completo" src={LogoCompleto} alt="logo dr-ahorro" />
      </Link>

    </div>
  );
};