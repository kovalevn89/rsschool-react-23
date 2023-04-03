import Search from '../components/search/Search';
import Card from '../components/card/Card';
import FilmsData from '../data/films.json';

const Mainpage = () => (
  <div data-testid="mainpage-id">
    <Search />
    <div className="films__list">
      {FilmsData.films.map((item) => (
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
      ))}
    </div>
  </div>
);

export default Mainpage;
