import React from "react";
import WordUtils from "./WordUtils.jsx";

const WordListEntry = ({ word, updated, setUpdated }) => {
  // ========== COMPONENT ==========
  return (
    <span className="word">
      <div className="word">Word: {word.name}</div>
      <div className="definition">Definition: {word.definition}</div>
      <div>
        <WordUtils word={word} updated={updated} setUpdated={setUpdated} />
      </div>
    </span>
  );
};

export default WordListEntry;
