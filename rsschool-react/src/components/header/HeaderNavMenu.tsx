import { NavLink } from 'react-router-dom';

const HeaderNavMenu = () => (
  <div className="nav__menu">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/input">Form</NavLink>
    <NavLink to="/about">About</NavLink>
  </div>
);

export default HeaderNavMenu;
