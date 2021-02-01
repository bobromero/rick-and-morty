import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [chars, setChars] = React.useState([]);

  React.useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character')
          .then(res => {
              const newChars = res.data.results;
              setChars(newChars);
          });
  },[]);

  return (
    <div className="grid-container">
      {chars.map(c => {
        return (
          <div className="grid-item">
            <img src={c.image} alt=""></img>
            <p>{c.name}</p>
            <p>{c.status}</p>
            <p>{c.species}</p>
            <p>{c.gender}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
