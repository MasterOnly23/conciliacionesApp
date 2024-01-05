import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBarMenuComponent.css";
import Toggle from "../../../assets/img/toggles/arrow-down.svg";
import 'animate.css';

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
        <li onClick={toggleBancos}><div className="option-menu" ><span>Bancos</span> <span><img className={isBancosExpanded ? 'rotate-toggle' : ''} src={Toggle} alt="dropdown toggle" /></span></div></li>
        {isBancosExpanded && (
          <ul className={`submenu ${isBancosExpanded ? 'animate__animated animate__slideInUp  expanded' : 'contracted'}`}>
            <li><Link to="/banco1">Banco 1</Link></li>
            <li><Link to="/banco2">Banco 2</Link></li>
          </ul>
        )}
        <li onClick={toggleConfiguracion}><div className="option-menu" ><span>Configuracion</span> <span><img className={isConfiguracionExpanded ? 'rotate-toggle' : ''} src={Toggle} alt="dropdown toggle" /></span></div></li>
        {isConfiguracionExpanded && (
          <ul className={`submenu ${isConfiguracionExpanded ? 'animate__animated animate__slideInUp expanded' : 'contracted'}`}>
            <li><Link to="/banco1">Banco 1</Link></li>
            <li><Link to="/banco2">Banco 2</Link></li>
          </ul>
        )}
      </ul>
    </div>
  );
};


// 
//       <Link to="/dashboard">Dashboard</Link>
//       <Link to="/about">About</Link>