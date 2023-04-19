import { ChangeEvent } from 'react';
import { ICardRM } from '../../components/types/types';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../../store/searchSlice';

interface ISearch {
  callback: (updateQuery: string) => void;
}

interface RootState {
  search: {
    queryString: string;
    isLoading: false;
    cards: ICardRM[];
  };
}

const Search = (searchQuery: ISearch) => {
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.search.queryString);

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchQuery.callback(text);
  };

  return (
    <div className="search__input">
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Search.." value={text} onChange={changeInput} />
      </form>
    </div>
  );
};

export default Search;
