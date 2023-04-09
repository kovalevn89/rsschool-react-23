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

import { getAllCharacter } from '../api/api';

// interface ISearch {
//   query: string;
// }

const Mainpage = () => {
  const [query, changeQuery] = useState(localStorage.getItem('searchbar') || '');
  const [cards, changeCards] = useState(Array<ICardRM>);

  // useEffect(() => {
  //   getAllCharacter();
  // }, []);

  const changeQueryCallback = (updateQuery: string) => {
    changeQuery(updateQuery);
  };

  useEffect(() => {
    if (query === '') {
      console.log('Получить всех персонажей!');

      const getAllCh = async () => {
        console.log('Начало загрузки....');
        const result = await getAllCharacter();
        console.log('Персонажи загружены....');

        if (result !== undefined) {
          changeCards(result);
        }
      };

      getAllCh();
    } else {
      console.log('Получить персонажей по запросу: ' + query);
    }
    //
  }, [query]);

  return (
    <div data-testid="mainpage-id">
      <Search callback={changeQueryCallback} />
      <span>{query}</span>
      <div className="result__list">
        {/* {FilmsData.films.map((item) => (
          <Card
            key={String(item.id)}
            uuid={String(item.id)}
            title={item.title}
            description={item.description}
            worldPremiere={item.worldPremiere}
            genre={item.genre}
            translationToRussian={item.translationToRussian}
            image={item.cover}
          />
        ))} */}
        {cards.map((item) => (
          <Card
            key={String(item.id)}
            uuid={String(item.id)}
            title={item.name}
            description={item.location.name}
            worldPremiere={item.created}
            genre={item.gender}
            translationToRussian={item.status}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Mainpage;
