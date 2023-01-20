import React from 'react';
import WordListEntry from './WordListEntry.jsx';

const WordList = ({ edit, remove, wordList, updated, setUpdated }) => {

  // ========== STATES ==========


  // ========== EFFECTS ==========


  // ========== HELPERS ==========


  // ========== HANDLERS ==========


  // ========== COMPONENT ==========
  return (
    <div className="word-list">
      My Glossary:
      {!wordList.length &&
        <div>There are no words here yet...</div>}
      {wordList.map((word, i) => {
        return <WordListEntry
          key={i}
          word={word}
          edit={edit}
          remove={remove}
          updated={updated}
          setUpdated={setUpdated}
        />
      })
      }
    </div>
  );
};

export default WordList;