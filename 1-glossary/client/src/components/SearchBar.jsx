import React from "react";
import { useState } from "react";


const SearchBar = ({ wordList, setWordList }) => {

  // ========== STATES ==========
  const [searchChars, setSearchChars] = useState('');

  // ========== HANDLERS ==========
  const onSearchSubmit = (e) => {
    setWordList(wordList.filter(word => word.name.includes(searchChars)))
  }

  const onClearSearch = () => {
    setSearchChars('');
  }

  const onSearchChange = (event) => {
    setSearchChars(event.target.value);
  };

  // ========== COMPONENT ==========
  return (
    <div className="search-field">
      <label>Search a word:
        <input value={searchChars} required={true} placeholder="mash keys..." onChange={onSearchChange} />
      </label>
      <button className="btn search" onClick={onSearchSubmit}>Find words</button>
      <button className="btn clear" onClick={onClearSearch}>Clear search</button>
    </div>
  );
};

export default SearchBar;