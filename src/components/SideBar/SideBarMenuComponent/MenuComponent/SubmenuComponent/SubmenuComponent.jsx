import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const SubmenuComponent = ({ isActive, links }) => {
  return (
    <>
    <ul className={`submenu ${isActive ? 'isActive' : ''}`}>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
    </>
  );
};

SubmenuComponent.propTypes = {
  isActive: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};