import Search from '../components/mainPage/Search';
import Card from '../components/card/Card';
// import FilmsData from '../data/films.json';
import { useEffect, useState } from 'react';
import { ICardRM } from '../components/types/types';

// const Mainpage = () => (
//   <div data-testid="mainpage-id">
//     <Search />
//     <div className="films__list">
//       {FilmsData.films.map((item) => (
//         <Card
//           key={String(item.id)}
//           uuid={String(item.id)}
//           title={item.title}
//           description={item.description}
//           worldPremiere={item.worldPremiere}
//           genre={item.genre}
//           translationToRussian={item.translationToRussian}
//           image={item.cover}
//         />
//       ))}
//     </div>
//   </div>
// );

import { getAllCharacter, searchCharacter } from '../api/api';

// interface ISearch {
//   query: string;
// }

const Mainpage = () => {
  const [query, changeQuery] = useState(localStorage.getItem('searchbar') || '');
  const [cards, changeCards] = useState(Array<ICardRM>);
  const [isLoading, changeLoading] = useState(false);

  const changeQueryCallback = (updateQuery: string) => {
    changeQuery(updateQuery);
  };

  useEffect(() => {
    if (query === '') {
      const getCharacter = async () => {
        changeLoading(true);
        const result = await getAllCharacter();
        changeLoading(false);

        result !== undefined ? changeCards(result) : changeCards([]);
      };

      getCharacter();
    } else {
      const getCharacter = async () => {
        changeLoading(true);
        const result = await searchCharacter(query);
        changeLoading(false);

        result !== undefined ? changeCards(result) : changeCards([]);
      };

      getCharacter();
    }
  }, [query]);

  return (
    <div data-testid="mainpage-id">
      <Search callback={changeQueryCallback} />
      {isLoading && (
        <div className="lds-ring">
          <div /> <div /> <div /> <div />
        </div>
      )}
      <div className="result__list">
        {cards.length <= 0 ? (
          <span>No results found!!!</span>
        ) : (
          cards.map((item) => (
            <Card
              key={String(item.id)}
              id={item.id}
              name={item.name}
              status={item.status}
              species={item.species}
              type={item.type}
              gender={item.gender}
              origin={{ name: item.origin.name, url: item.origin.url }}
              location={{ name: item.location.name, url: item.location.url }}
              image={item.image}
              episode={item.episode}
              url={item.url}
              created={item.created}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Mainpage;
