import { NavLink } from 'react-router-dom';

const HeaderNavMenu = () => (
  <div className="nav__menu">
    <NavLink
      to="/"
      className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
    >
      Home
    </NavLink>
    <NavLink
      to="/input"
      className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
    >
      Form
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
    >
      About
    </NavLink>
  </div>
);

export default HeaderNavMenu;
