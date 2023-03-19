import React from 'react';
import Search from '../components/search/Search';

class Mainpage extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <span>This is HOME page!</span>
      </div>
    );
  }
}

export default Mainpage;
