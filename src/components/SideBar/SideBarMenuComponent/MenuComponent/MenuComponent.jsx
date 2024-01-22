import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Toggle from "../../../..//assets/img/toggles/arrow-down.svg";

export const MenuComponent = ({ menuName, isActive, toggleMenu, links }) => {
    return (
        <>
            <li onClick={() => toggleMenu(menuName)}>
                <div className="option-menu">
                    <span>{menuName}</span>{" "}
                    <span>
                        <img
                            className={isActive ? "rotate-toggle" : ""}
                            src={Toggle}
                            alt="dropdown toggle"
                        />
                    </span>
                </div>
            </li>
            <ul className={`submenu ${isActive ? 'isActive' : ''}`}>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

MenuComponent.propTypes = {
    menuName: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};