import React from "react";
import WordUtils from './WordUtils.jsx';

const WordListEntry = ({ word, edit, remove, updated, setUpdated }) => {

  // ========== STATES ==========


  // ========== EFFECTS ==========


  // ========== HELPERS ==========


  // ========== HANDLERS ==========
  // const handleEdit = (event) => {
  //   console.log('handleEdit: ', event)
  // };

  // const handleRemove = (event) => {
  //   console.log('handleRemove: ', event)
  // };

  // ========== COMPONENT ==========
  return (
    <span className="word container">
      <div className="word">
        Word: {word.name}
      </div>
      <div className="definition">
        Definition: {word.definition}
      </div>
      <div>
        <WordUtils
          word={word}
          edit={edit}
          remove={remove}
          updated={updated}
          setUpdated={setUpdated}
        />
      </div>
    </span>
  );
};

export default WordListEntry;