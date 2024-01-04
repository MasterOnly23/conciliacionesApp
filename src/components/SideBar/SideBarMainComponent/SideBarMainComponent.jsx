import "./SideBarMainComponent.css";
import { SideBarMenuComponent } from "../SideBarMenuComponent/SideBarMenuComponent";
import { SideBarLogoComponent } from "../SideBarLogoComponent/SideBarLogoComponent";

const SideBarMainComponent = () => {
  return (
    <div className="sidebar-main">
      <SideBarLogoComponent />
      <SideBarMenuComponent />
    </div>
  );
};

export default SideBarMainComponent;
