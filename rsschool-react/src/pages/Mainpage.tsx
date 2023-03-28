import React from 'react';
import Search from '../components/search/Search';
import Card from '../components/card/Card';
import CardsData from '../assets/products/products.json';

class Mainpage extends React.Component {
  render() {
    return (
      <div data-testid="mainpage-id">
        <Search />
        <div className="main__products">
          {CardsData.products.map((item) => (
            <Card
              key={String(item.id)}
              mkey={String(item.id)}
              thumbnail={item.thumbnail}
              manufacturer={item.manufacturer}
              title={item.title}
              price={String(item.price)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Mainpage;
