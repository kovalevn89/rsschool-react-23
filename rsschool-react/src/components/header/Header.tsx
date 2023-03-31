import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderPageIndicator from './HeaderPageIndicator';
import HeaderNavMenu from './HeaderNavMenu';
import { HeaderPath } from '../types/types';

class Header extends React.Component<HeaderPath> {
  constructor(props: Readonly<HeaderPath>) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <HeaderLogo />
        <HeaderPageIndicator path={this.props.path} />
        <HeaderNavMenu />
      </header>
    );
  }
}

export default Header;
