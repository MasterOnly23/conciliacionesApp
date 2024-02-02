import PropTypes from "prop-types";
import Toggle from "../../../..//assets/img/toggles/arrow-down.svg";
import { SubmenuComponent } from "./SubmenuComponent/SubmenuComponent";



export const MenuComponent = ({ menuName, isActive, toggleMenu, links, iconMenu = '' }) => {
  return (
    <>
      <li onClick={() => toggleMenu(menuName)}>
        <div className="option-menu">
          <span><img src={iconMenu || ''} alt="icon menu" /></span>
          <span>{menuName}</span>
          <span>
            <img
              className={isActive ? "rotate-toggle" : ""}
              src={Toggle}
              alt="dropdown toggle"
            />
          </span>
        </div>
      </li>
      <SubmenuComponent isActive={isActive} links={links} />
    </>
  );
};

MenuComponent.propTypes = {
  menuName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  iconMenu: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};