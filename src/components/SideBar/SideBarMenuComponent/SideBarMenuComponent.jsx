import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBarMenuComponent.css";
import DropdownToggle from "../../../assets/img/toggles/dropdown-50.png";
import DropupToggle from "../../../assets/img/toggles/dropup-50.png";
import Toggle from "../../../assets/img/toggles/arrow-down.svg";

export const SideBarMenuComponent = () => {
  const [isBancosExpanded, setIsBancosExpanded] = useState(false);
  const [isConfiguracionExpanded, setIsConfiguracionExpanded] = useState(false);

  const toggleBancos = () => {
    setIsBancosExpanded(!isBancosExpanded);
  };

  const toggleConfiguracion = () => {
    setIsConfiguracionExpanded(!isConfiguracionExpanded);
  };

  return (
    <div className="sidebar-menu">
      <ul>
        <li onClick={toggleBancos}><div className="option-menu"><span>Bancos</span> <span><img src={isBancosExpanded ? DropupToggle : Toggle} alt="dropdown toggle" /></span></div></li>
        {isBancosExpanded && (
          <ul className="submenu">
            <li>Opción 1</li>
            <li>Opción 2</li>
            {/* Agrega más opciones según sea necesario */}
          </ul>
        )}
        <li onClick={toggleConfiguracion}><div className="option-menu"><span>Configuracion</span> <span><img src={isConfiguracionExpanded ? DropupToggle : DropdownToggle} alt="dropdown toggle" /></span></div></li>
        {isConfiguracionExpanded && (
          <ul className="submenu">
            <li>Opción A</li>
            <li>Opción B</li>
            {/* Agrega más opciones según sea necesario */}
          </ul>
        )}
      </ul>
    </div>
  );
};


// <Link to="/">Home</Link>
//       <Link to="/dashboard">Dashboard</Link>
//       <Link to="/about">About</Link>