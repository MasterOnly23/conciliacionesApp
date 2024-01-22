import { useState } from "react";
import "./SideBarMenuComponent.css";
import "animate.css";
import { MenuComponent } from "./MenuComponent/MenuComponent";

export const SideBarMenuComponent = () => {
  const menuNames = {
    BANCOS: 'Bancos',
    CONFIGURACION: 'Configuracion'
  };

  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const links = {
    [menuNames.BANCOS]: [
      { path: "/banco1", name: "Banco 1" },
      { path: "/banco2", name: "Banco 2" }
    ],
    [menuNames.CONFIGURACION]: [
      { path: "/config1", name: "Config 1" },
      { path: "/config2", name: "Config 2" }
    ]
  };

  return (
    <div className="sidebar-menu">
      <ul>
        <MenuComponent
          menuName={menuNames.BANCOS}
          isActive={activeMenu === menuNames.BANCOS}
          toggleMenu={toggleMenu}
          links={links[menuNames.BANCOS]}
        />
        <MenuComponent
          menuName={menuNames.CONFIGURACION}
          isActive={activeMenu === menuNames.CONFIGURACION}
          toggleMenu={toggleMenu}
          links={links[menuNames.CONFIGURACION]}
        />
      </ul>
    </div>
  );
};