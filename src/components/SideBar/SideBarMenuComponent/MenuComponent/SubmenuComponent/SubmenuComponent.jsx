import { Link, useMatch } from "react-router-dom";
import PropTypes from "prop-types";

const ListItem = ({ link }) => {
  const match = useMatch(link.path);
  return (
    <li>
      <Link 
        className={match ? "bank bank-active" : "bank"} 
        to={link.path}
      >
        {link.name}
      </Link>
    </li>
  );
};

ListItem.propTypes = {
  link: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export const SubmenuComponent = ({ isActive, links }) => {
  const maxHeight = `${links.length * 50}px`; // Asume que cada enlace tiene una altura de 50px

  return (
    <ul className={`submenu ${isActive ? 'isActive' : ''}`} style={{ maxHeight: isActive ? maxHeight : '0' }}>
      {links.map((link, index) => (
        <ListItem key={index} link={link} />
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