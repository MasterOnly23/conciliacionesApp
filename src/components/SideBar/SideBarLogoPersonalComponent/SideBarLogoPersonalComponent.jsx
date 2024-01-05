import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBarLogoPersonalComponent.css";
import LogoPersonal from "../../../assets/img/logo-jfd.png";

export const SideBarLogoPersonalComponent = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="sidebar-logo-personal">
      <Link to="https://github.com/MasterOnly23" target="_blank" rel="noopener noreferrer">
        <img
          className={`logo-personal animate__animated ${hovered ? "animate__zoomIn" : ""}`}
          src={LogoPersonal}
          alt="logo personal"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Link>
    </div>
  );
};