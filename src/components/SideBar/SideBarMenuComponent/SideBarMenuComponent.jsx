import { useState } from "react";
import "./SideBarMenuComponent.css";
import "animate.css";
import { MenuComponent } from "./MenuComponent/MenuComponent";
import  Bank  from "../../../assets/img/sidebarLogo/bank.png"
import  Settings  from "../../../assets/img/sidebarLogo/settings.png"

export const SideBarMenuComponent = () => {
  const menuNames = {
    CONCILIACIONES: 'Conciliaciones',
    AJUSTES: 'Ajustes'
  };

  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const links = {
    [menuNames.CONCILIACIONES]: [
      { path: "/BancoComafi", name: "Banco Comafi" },
      { path: "/BancoSantander", name: "Banco Santander" },
      { path: "/BancoGalicia", name: "Banco Galicia" },
      { path: "/BancoICBC", name: "Banco ICBC" }
    ],
    [menuNames.AJUSTES]: [
      { path: "/historial", name: "Historial" },
      // { path: "/config2", name: "Config 2" }
    ]
  };

  return (
    <div className="sidebar-menu">
      <ul>
        <MenuComponent
          menuName={menuNames.CONCILIACIONES}
          isActive={activeMenu === menuNames.CONCILIACIONES}
          toggleMenu={toggleMenu}
          links={links[menuNames.CONCILIACIONES]}
          iconMenu={Bank}
        />
        <MenuComponent
          menuName={menuNames.AJUSTES}
          isActive={activeMenu === menuNames.AJUSTES}
          toggleMenu={toggleMenu}
          links={links[menuNames.AJUSTES]}
          iconMenu={Settings}
        />
      </ul>
    </div>
  );
};