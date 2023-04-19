import Search from '../components/mainPage/Search';
import Card from '../components/card/Card';
import { ICardsAnwer, RootState } from '../components/types/types';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../store/searchSlice';
import { useGetCardsQuery } from '../api/api';

const Mainpage = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.queryString);

  const { data = [], isLoading, isError } = useGetCardsQuery(query);

  const changeQueryCallback = (updateQuery: string) => {
    dispatch(setQuery(updateQuery));
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
        {!(data as ICardsAnwer).results || isError ? (
          <span>No results found!!!</span>
        ) : (
          (data as ICardsAnwer).results.map((item) => (
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
