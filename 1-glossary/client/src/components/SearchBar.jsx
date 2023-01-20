import React from "react";
import {useState} from "react";


const SearchBar = ({wordList, setWordList}) => {

  // ========== STATES ==========
  const [searchChars, setSearchChars] = useState('');

  // ========== EFFECTS ==========


  // ========== HELPERS ==========

  // ========== HANDLERS ==========
  const search = () => {
    setWordList(wordList.filter(word => word.name.includes(searchChars)))
    clear()
  }

  const clear = () => {
    setSearchChars('')
  }

  const onSearchChange = (event) => {
    setSearchChars(event.target.value);
  };

  // ========== COMPONENT ==========
  return (
    <div className="search-field">
        <label>Search up a word:
          <input placeholder="mash keys..." onChange={onSearchChange}/>
        </label>
        <button className="btn search" onClick={search}>Find words</button>
        <button className="btn clear" onClick={clear}>Clear search</button>
    </div>
  );
};

export default SearchBar;