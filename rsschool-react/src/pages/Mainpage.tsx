import Search from '../components/mainPage/Search';
import Card from '../components/card/Card';
import { ICardRM } from '../components/types/types';
import { getAllCharacter, searchCharacter } from '../api/api';
import { useSelector, useDispatch } from 'react-redux';
import { setCard, setLoadState, setQuery } from '../store/searchSlice';

interface RootState {
  search: {
    queryString: string;
    isLoading: false;
    cards: ICardRM[];
  };
}

const Mainpage = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.search.cards);
  const isLoading = useSelector((state: RootState) => state.search.isLoading);
  const query = useSelector((state: RootState) => state.search.queryString);

  const changeQueryCallback = (updateQuery: string) => {
    dispatch(setQuery(updateQuery));

    const getCharacter = async () => {
      dispatch(setLoadState(true));
      const result = await (query === '' ? getAllCharacter() : searchCharacter(query));
      dispatch(setLoadState(false));

      dispatch(setCard(result || []));
    };

    getCharacter();
  };

  return (
    <div data-testid="mainpage-id">
      <Search callback={changeQueryCallback} />
      {isLoading && (
        <div className="lds-ring">
          <div /> <div /> <div /> <div />
        </div>
      )}
      <div className="result__list">
        {!cards ? (
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
