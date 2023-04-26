import React from "react";
import { useState } from "react";

const SearchBar = ({ wordList, setWordList }) => {
  // ========== STATES ==========
  const [searchChars, setSearchChars] = useState("");

  // ========== HANDLERS ==========
  const onSearchSubmit = (e) => {
    e.preventDefault();
    setWordList(wordList.filter((word) => word.name.includes(searchChars)));
  };

  const onClearSearch = (e) => {
    e.preventDefault();
    setSearchChars("");
  };

  const onSearchChange = (e) => {
    e.preventDefault();
    setSearchChars(e.target.value);
  };

  // ========== COMPONENT ==========
  return (
    <div className="search-field">
      <label className="input-label">
        Search a word:
        <input
          className="input-field"
          value={searchChars}
          required={true}
          placeholder="mash keys..."
          onChange={onSearchChange}
        />
      </label>
      <button className="btn search" onClick={onSearchSubmit}>
        Find words
      </button>
      <button className="btn clear" onClick={onClearSearch}>
        Clear search
      </button>
    </div>
  );
};

export default SearchBar;
