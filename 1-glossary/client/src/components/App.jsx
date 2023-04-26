import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar.jsx";
import WordList from "./WordList.jsx";
import AddWord from "./AddWord.jsx";

const App = () => {
  // ========== STATES ==========
  const [wordList, setWordList] = useState([]);
  const [updated, setUpdated] = useState(false);

  // ========== EFFECTS ==========
  useEffect(() => {
    render();
  }, [updated]);

  // ========== HELPERS ==========
  const render = () => {
    axios
      .get("/api")
      .then((response) => {
        setWordList(response.data);
        console.log("app get SUCCESS");
      })
      .catch((error) => {
        console.log("app get ERROR: ", error);
      });
  };

  // ========== COMPONENT ==========
  return (
    <div>
      <div className="title">Welcome to my glossary!</div>
      <div className="add-word container">
        <AddWord updated={updated} setUpdated={setUpdated} render={render} />
      </div>
      <div className="search-bar container">
        <SearchBar wordList={wordList} setWordList={setWordList} />
      </div>
      <div className="word-list container">
        <WordList
          wordList={wordList}
          updated={updated}
          setUpdated={setUpdated}
        />
      </div>
    </div>
  );
};

export default App;
