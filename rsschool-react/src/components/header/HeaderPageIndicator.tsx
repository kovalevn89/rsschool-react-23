import React from 'react';
import { HeaderPath } from '../types/types';

class HeaderPageIndicator extends React.Component<HeaderPath> {
  private locationPath: { [path: string]: string } = {
    '/': 'Main',
    '/input': 'Form',
    '/about': 'About',
  };

  constructor(props: Readonly<HeaderPath>) {
    super(props);
  }

  render() {
    return (
      <div className="current__page">
        <p>{this.locationPath[this.props.path] || 'Error'}</p>
      </div>
    );
  }
}

export default HeaderPageIndicator;
