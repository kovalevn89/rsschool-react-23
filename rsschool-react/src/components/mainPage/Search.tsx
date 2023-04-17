import { useState, useEffect, ChangeEvent } from 'react';

interface ISearch {
  callback: (updateQuery: string) => void;
}

const Search = (searchQuery: ISearch) => {
  const [text, changeText] = useState(localStorage.getItem('searchbar') || '');

  useEffect(() => {
    localStorage.setItem('searchbar', text);
  }, [text]);

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    changeText(e.target.value);
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
