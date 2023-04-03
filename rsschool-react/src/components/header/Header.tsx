import HeaderLogo from './HeaderLogo';
import HeaderPageIndicator from './HeaderPageIndicator';
import HeaderNavMenu from './HeaderNavMenu';
import { HeaderPath } from '../types/types';

const Header = (headerPath: HeaderPath) => (
  <header className="header">
    <HeaderLogo />
    <HeaderPageIndicator path={headerPath.path} />
    <HeaderNavMenu />
  </header>
);

export default Header;
