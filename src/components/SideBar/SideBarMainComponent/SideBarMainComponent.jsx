import "./SideBarMainComponent.css";
import { SideBarMenuComponent } from "../SideBarMenuComponent/SideBarMenuComponent";
import { SideBarLogoComponent } from "../SideBarLogoComponent/SideBarLogoComponent";
import { SideBarLogoPersonalComponent } from "../SideBarLogoPersonalComponent/SideBarLogoPersonalComponent";

const SideBarMainComponent = () => {
  return (
    <div className="sidebar-main">
      <SideBarLogoComponent />
      <SideBarMenuComponent />
      <SideBarLogoPersonalComponent />
    </div>
  );
};

export default SideBarMainComponent;
