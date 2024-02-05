import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const SubmenuComponent = ({ isActive, links }) => {
  const maxHeight = `${links.length * 50}px`; // Asume que cada enlace tiene una altura de 50px

  return (
    <ul className={`submenu ${isActive ? 'isActive' : ''}`} style={{ maxHeight: isActive ? maxHeight : '0' }}>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
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