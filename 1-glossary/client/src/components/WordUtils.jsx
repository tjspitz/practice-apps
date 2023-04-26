import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const WordUtils = ({ word, updated, setUpdated }) => {
  // ========== STATES ==========
  const [defEdit, setDefEdit] = useState('');

  // ========== HANDLERS ==========
  const handleEdit = (event) => {
    event.preventDefault();
    let newDef = prompt('Please enter a new definition...', word.definition);

    if (newDef !== null) {
      axios
        .patch('/api', {
          name: word.name,
          definition: newDef,
        })
        .then((response) => {
          console.log('app edit SUCCESS');
          setUpdated(!updated);
        })
        .catch((error) => {
          console.log('app edit ERROR: ', error);
        });
    }
  };

  const handleRemove = (event) => {
    event.preventDefault();
    console.log('handleRemove: ', word);
    let oldWord = word.name;

    axios
      .delete('/api', { data: word })
      .then((response) => {
        console.log('app delete SUCCESS');

        alert(`${oldWord} has been removed!`);
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log('app delete ERROR: ', error);
      });
  };

  // ========== COMPONENT ==========
  return (
    <div>
      <button className="edit-word btn" name="edit" onClick={handleEdit}>
        Edit {word.name}'s definition
      </button>
      <button className="remove-word btn" name="remove" onClick={handleRemove}>
        Remove {word.name}
      </button>
    </div>
  );
};

export default WordUtils;
