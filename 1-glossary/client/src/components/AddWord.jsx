import React from "react";
import { useState } from "react";
import axios from 'axios';

const AddWord = ({ updated, setUpdated }) => {

  // ========== STATES ==========
  const [wordChars, setWordChars] = useState('');
  const [defChars, setDefChars] = useState('');

  // ========== HANDLERS ==========
  const addWord = (word) => {
    axios.post('/api', {
      name: wordChars,
      definition: defChars
    })
      .then(response => {
        console.log('app post SUCCESS');
        setUpdated(!updated);
      })
      .catch(error => {
        console.log('app post ERROR: ', error);
      });
    handleClear();
  };

  const handleWordChange = (event) => {
    setWordChars(event.target.value);
  };

  const handleDefChange = (event) => {
    setDefChars(event.target.value)
  }

  const handleClear = (event) => {
    setWordChars('');
    setDefChars('');
  };

  // ========== COMPONENT ==========
  return (
    <div className="add-word container">
      
      <label>Add new word:
        <input value={wordChars} required={true} placeholder="new word name..." onChange={handleWordChange} />
      </label>
      <label>Enter a definition:
        <input value={defChars} required={true} placeholder="define your word..." onChange={handleDefChange} />
      </label>
      <button className="btn add-word" onClick={addWord}>Add new word</button>
      <button className="btn clear" onClick={handleClear}>Clear inputs</button>
    </div>
  );
}

export default AddWord;