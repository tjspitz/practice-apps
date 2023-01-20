import React from "react";
import axios from 'axios';

const WordUtils = ({ word, edit, updated, setUpdated }) => {

  // ========== STATES ==========


  // ========== EFFECTS ==========


  // ========== HELPERS ==========


  // ========== HANDLERS ==========
  const handleEdit = (event) => {
    console.log('handleEdit: ', event);

  };

  const handleRemove = (event) => {
    console.log('handleRemove: ', word);
    let oldWord = word.name;

    axios.delete('/api', {data: word})
      .then(response => {
        console.log('app delete SUCCESS');

        alert(`${oldWord} has been removed!`);
        setUpdated(!updated);
      })
      .catch(error => {
        console.log('app delete ERROR: ', error);
      });

  };

  // ========== COMPONENT ==========
  return (
    <div>
      <button name="edit" onClick={handleEdit}>Edit {word.name}'s description</button>
      <button name="remove" onClick={handleRemove}>Remove {word.name}</button>
    </div>
  );
};

export default WordUtils;