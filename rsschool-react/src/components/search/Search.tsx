import { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';

const Search = () => {
  const [text, changeText] = useState(localStorage.getItem('searchbar') || '');

  useEffect(() => {
    localStorage.setItem('searchbar', text);
  }, [text]);

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    changeText(e.target.value);
  };

  return (
    <div className="search__input">
      <input type="text" placeholder="Search.." value={text} onChange={changeInput}></input>
    </div>
  );
};

export default Search;
