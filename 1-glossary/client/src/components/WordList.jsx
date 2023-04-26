import React from 'react';
import WordListEntry from './WordListEntry.jsx';

const WordList = ({ wordList, updated, setUpdated }) => {
  // ========== COMPONENT ==========
  return (
    <div className="word-list">
      My Glossary:
      {!wordList.length && <div>There are no words here yet...</div>}
      {wordList.map((word, i) => {
        return (
          <WordListEntry
            key={word._id}
            word={word}
            updated={updated}
            setUpdated={setUpdated}
          />
        );
      })}
    </div>
  );
};

export default WordList;
