import React from 'react';
import Search from '../components/search/Search';
import Card3 from '../components/card/Card3';
import FilmsData from '../data/films.json';

class Mainpage extends React.Component {
  render() {
    return (
      <div data-testid="mainpage-id">
        <Search />
        <div className="films__list">
          {FilmsData.films.map((item) => (
            <Card3
              key={String(item.id)}
              uuid={String(item.id)}
              title={item.title}
              description={item.description}
              worldPremiere={item.worldPremiere}
              genre={item.genre}
              translationToRussian={item.translationToRussian}
              image={item.cover}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Mainpage;
