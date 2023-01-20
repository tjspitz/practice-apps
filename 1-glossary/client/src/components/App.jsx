import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import WordList from './WordList.jsx';

const App = () => {

  // ========== STATES ==========
  const [wordList, setWordList] = useState([]);
  const [updated, setUpdated] = useState(false);

  // ========== EFFECTS ==========
  useEffect(() => {render()}, [updated]);

  // ========== HELPERS ==========
  const render = () => {
    axios.get('/api')
      .then(response => {
        setWordList(response.data);
        console.log('app get SUCCESS');
      })
      .catch(error => {
        console.log('app get ERROR: ',  error);
      });
  };

  // ========== HANDLERS ==========
  // const search = (searchWord) => {
  //   setWordList(wordList.filter(word => word.name.includes(searchWord)));
  // };

  // const clear = () => {
  //   setSearchChars('')
  // };

  const add = (word) => {
    axios.post('/api', {
      name: word.name,
      description: word.description
    })
    .then(response => {
      console.log('app post SUCCESS');
      setUpdated(!updated);
    })
    .catch(error => {
      console.log('app post ERROR: ', error);
    });
  };

  const edit = (word) => {
    axios.patch('/api', {
      name: word.name,
      description: word.description
    })
    .then(response => {
      console.log('app edit SUCCESS');
      setUpdated(!updated);
    })
    .catch(error => {
      console.log('app edit ERROR: ', error);
    });
  };

  // const remove = (word) => {
  //   axios.delete(`/api/${word}`)
  //     .then(response => {
  //       console.log('app delete SUCCESS');
  //     setUpdated(!updated);
  //     })
  //     .catch(error => {
  //       console.log('app delete ERROR: ', error);
  //     });
  // };

  // ========== COMPONENT ==========
  return (
    <div>
      <div className="title">
        Welcome to my glossary!
      </div>
      <div className="add-word">
        {/* < AddWordForm /> */}
      </div>
      <div className="search-bar">
        < SearchBar
          // search={search}
          // clear={clear}
          wordList={wordList}
          setWordList={setWordList}
        />
      </div>
      <div className="word-list container">
        < WordList
          edit={edit}
          // remove={remove}
          wordList={wordList}
          updated={updated}
          setUpdated={setUpdated}
        />
      </div>
    </div>
  );

};

export default App;