import React from 'react';
import { useState, useEffect } from 'react';

const Search = () => {
  const [text, changeText] = useState(localStorage.getItem('searchbar') || '');

  useEffect(() => {
    localStorage.setItem('searchbar', text);
  }, [text]);

  return (
    <div className="search__input">
      <input
        type="text"
        placeholder="Search.."
        value={text}
        onChange={(e) => {
          changeText(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Search;
